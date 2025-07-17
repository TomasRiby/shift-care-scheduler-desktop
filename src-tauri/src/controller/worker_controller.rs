use crate::model::worker::Worker;
use tauri::AppHandle;

#[tauri::command]
pub fn create_worker(app: AppHandle, name: String, contact: String) -> Result<(), String> {
    crate::service::worker_service::create_worker(app, name, contact)
}

#[tauri::command]
pub fn get_all_workers(app: AppHandle) -> Result<Vec<Worker>, String> {
    crate::service::worker_service::get_all_works(app)
}
