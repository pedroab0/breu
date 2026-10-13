const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const PKG_FILE = path.join(__dirname, '../package.json');

async function publish() {
  console.log('Preparing Breu for npm publication as @pedroab0/breu...');

  const originalContent = await fs.promises.readFile(PKG_FILE, 'utf-8');
  const pkg = JSON.parse(originalContent);

  let restored = false;
  const restore = () => {
    if (!restored) {
      fs.writeFileSync(PKG_FILE, originalContent);
      restored = true;
      console.log('✓ Restored package.json to original state.');
    }
  };

  process.on('SIGINT', () => {
    restore();
    process.exit(130);
  });

  process.on('SIGTERM', () => {
    restore();
    process.exit(143);
  });

  try {
    // Build all theme artifacts
    console.log('Running pre-publish build...');
    const buildRes = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' });
    if (buildRes.status !== 0) {
      throw new Error('Build step failed before publish.');
    }

    // Set scoped name and public access for npm registry
    pkg.name = '@pedroab0/breu';
    pkg.publishConfig = { access: 'public' };
    await fs.promises.writeFile(PKG_FILE, JSON.stringify(pkg, null, 2) + '\n');

    // Run npm publish with interactive stdio
    const extraArgs = process.argv.slice(2);
    console.log('\nPublishing @pedroab0/breu to npm...\n');
    const pubRes = spawnSync('npm', ['publish', '--access', 'public', ...extraArgs], { stdio: 'inherit' });
    if (pubRes.status !== 0) {
      throw new Error(`npm publish exited with code ${pubRes.status}`);
    }

    console.log('\n✓ Successfully published @pedroab0/breu to npm!');
  } finally {
    restore();
  }
}

publish().catch(err => {
  console.error('Publish failed:', err.message);
  process.exit(1);
});
