use std::collections::HashMap;
use std::fmt;
use std::fs::File;
use std::io::{self, Read};
use std::sync::{Arc, Mutex};
use std::thread;

const MAX_CONNECTIONS: u32 = 100;
static TIMEOUT: u64 = 30;

#[derive(Debug, PartialEq)]
enum ConnectionState {
    Disconnected,
    Connecting(String),
    Connected { ip: String, port: u16 },
    Error(ConnectionError),
}

#[derive(Debug)]
struct ConnectionError {
    code: u32,
    message: String,
}

trait Connectable {
    fn connect(&mut self) -> Result<(), String>;
    fn disconnect(&mut self);
}

#[derive(Debug, Clone)]
pub struct ServerConfig {
    pub host: String,
    port: u16,
    pub is_active: bool,
    metadata: HashMap<String, String>,
}

impl ServerConfig {
    pub fn new(host: &str, port: u16) -> Self {
        Self {
            host: host.to_string(),
            port,
            is_active: false,
            metadata: HashMap::new(),
        }
    }

    pub fn get_host<'a>(&'a self) -> &'a str {
        &self.host
    }
}

struct Response<T> {
    data: T,
    status: u16,
}

macro_rules! log_info {
    ($($arg:tt)*) => ({
        println!("[INFO] {}", format!($($arg)*));
    })
}

fn main() -> io::Result<()> {
    let version = "1.0.0";
    let mut counter = 0;
    
    log_info!("Starting application version {}", version);

    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();

    let state = ConnectionState::Connected {
        ip: "127.0.0.1".to_string(),
        port: 8080,
    };

    match state {
        ConnectionState::Disconnected => println!("Offline"),
        ConnectionState::Connecting(url) => println!("Connecting to {}", url),
        ConnectionState::Connected { ip, port } => {
            println!("Connected to {}:{}", ip, port);
        },
        ConnectionState::Error(e) => eprintln!("Error: {}", e.message),
    }

    if counter < 10 {
        counter += 1;
    } else {
        counter = 0;
    }

    loop {
        if counter >= 5 { break; }
        counter += 1;
    }

    let data = Arc::new(Mutex::new(vec![1, 2, 3]));
    let data_clone = Arc::clone(&data);

    let handle = thread::spawn(move || {
        let mut vector = data_clone.lock().unwrap();
        vector.push(4);
    });

    handle.join().unwrap();

    let content = read_file_content("example.txt");
    match content {
        Ok(text) => println!("File content: {}", text),
        Err(_) => println!("Could not read file (expected)"),
    }

    unsafe {
        let raw_ptr: *const i32 = &counter;
        println!("Raw pointer value: {}", *raw_ptr);
    }
    
    let _future = async {
        let result = perform_async_task().await;
        println!("Async result: {}", result);
    };

    Ok(())
}

fn read_file_content(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

async fn perform_async_task() -> i32 {
    42
}
