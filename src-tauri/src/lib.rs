use crate::config::database::set_up_db;
use crate::controller::worker_controller::create_worker;
use crate::controller::worker_controller::get_all_workers;
use tauri::Manager;
mod config;
mod controller;
mod model;
mod persistence;
mod repository;
mod service;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![create_worker, get_all_workers])
        .setup(|app| {
            set_up_db(app.app_handle());
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
