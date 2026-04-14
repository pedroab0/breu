"use strict";

const APP_NAME = "Breu Theme Test";
let sessionCount = 0;
var legacyVar = "avoid if possible";

class Widget {
  #privateField = 42;
  static version = "2.1.0";

  constructor(name) {
    this.name = name;
  }

  get id() {
    return this.#privateField;
  }

  render() {
    console.log(`Rendering ${this.name}...`);
  }
}

class IconButton extends Widget {
  constructor(name, icon) {
    super(name);
    this.icon = icon;
  }

  async click() {
    try {
      const response = await fetch("/api/click");
      const data = await response.json();
      return data.success;
    } catch (err) {
      console.error("Click failed:", err.message);
      return false;
    }
  }
}

const sum = (a, b) => a + b;

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const settings = {
  theme: "dark",
  fontSize: 14,
  showMinimap: true,
  colors: ["#000000", "#ffffff"],
  ["computed_key"]: Date.now()
};

const { theme, fontSize, ...others } = settings;

const sym = Symbol("unique");
const hex = 0xff;
const binary = 0b1010;
const bigInt = 9007199254740991n;
const pattern = /\d+/g;

const template = `Welcome to ${APP_NAME}!
Current time is: ${new Date().toLocaleTimeString()}`;

if (settings.showMinimap && sessionCount < 10) {
  sessionCount += 1;
} else if (!theme) {
  console.log("No theme selected");
}

const isEnabled = others.showMinimap ?? true;
const optional = settings?.user?.profile;

export { IconButton, sum, template };
