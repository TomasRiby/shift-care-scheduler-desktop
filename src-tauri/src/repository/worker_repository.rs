use crate::config::database::db_connect;
use crate::model::worker::Worker;
use rusqlite::params;
use tauri::AppHandle;

pub fn save_worker(app: AppHandle, worker: Worker) -> Result<(), String> {
    let connection = db_connect(&app);

    connection
        .execute(
            "INSERT OR REPLACE INTO workers (name, contact) VALUES (?1, ?2)",
            params![worker.name, worker.contact],
        )
        .map_err(|e| e.to_string())
        .expect("Failure Saving Worker");

    Ok(())
}

pub fn get_all_workers(app: AppHandle) -> Result<Vec<Worker>, String> {
    // 1. Open the connection
    let conn = db_connect(&app);

    // 2. Prepare the SELECT statement
    let mut stmt = conn
        .prepare("SELECT id, name, contact FROM workers ORDER BY id")
        .map_err(|e| e.to_string())?;

    // 3. Execute and map each row into a Worker
    let worker_iter = stmt
        .query_map([], |row| {
            Ok(Worker {
                id: Some(row.get(0)?),
                name: row.get(1)?,
                contact: row.get(2)?,
            })
        })
        .map_err(|e| e.to_string())?;

    // 4. Collect into a Vec
    let mut workers = Vec::new();
    for worker in worker_iter {
        workers.push(worker.map_err(|e| e.to_string())?);
    }

    Ok(workers)
}
