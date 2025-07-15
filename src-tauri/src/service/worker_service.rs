use tauri::AppHandle;
use crate::model::worker::Worker;
use crate::repository::worker_repository::{save_worker,get_all_workers};

pub fn create_worker(app:AppHandle, name: String, contact: String) -> Result<(),String> {
    //TODO: Validate name and contact etc
    let worker: Worker = Worker::new(name, contact);
    
    let result = save_worker(app,worker);
    
    if result.is_err() { 
        println!("Worker_Service: Error while creating worker")
    }
    
    result
}

pub fn get_all_works(app: AppHandle) -> Result<Vec<Worker>, String> {
    get_all_workers(app)
}
