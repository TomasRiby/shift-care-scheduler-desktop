use serde::{Deserialize, Serialize};

#[derive(Debug,Serialize,Deserialize)]
pub struct Worker {
    pub id: Option<i32>,
    pub name: String,
    pub contact: String
}

impl Worker{
    pub fn new(name: String, contact: String) -> Worker {
        Worker {id: None, name, contact }
    }
    
}
