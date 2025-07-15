use rusqlite::Connection;
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};

use crate::persistence::worker_schema::WORKER_SCHEMA;

pub fn db_connect(app: &AppHandle) -> Connection {
    Connection::open(app.path().app_data_dir().unwrap().join("schedule.db"))
        .expect("Connection to schedule.db failed.")
}

pub fn set_up_db(app: &AppHandle) {
    let app_data_dir = data_dir(&app);

    fs::create_dir_all(&app_data_dir).expect("Could not create app data directory");

    let db_path = app_data_dir.join("schedule.db");

    if !db_path.exists() {
        let conn =
            Connection::open(&db_path).expect("Failed to open schedule.db for initialization");
        conn.execute_batch(&WORKER_SCHEMA)
            .expect("Failed to initialize schema");
    }
}

pub fn data_dir(app: &AppHandle) -> PathBuf {
    app.path()
        .app_data_dir()
        .expect("Failed to open the app_data_dir. Read the docs: https://docs.rs/tauri/latest/tauri/path/struct.PathResolver.html#method.app_data_dir")
}
