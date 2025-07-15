pub static WORKER_SCHEMA: &str = r#"
CREATE TABLE IF NOT EXISTS workers (
  id      INTEGER PRIMARY KEY,
  name    TEXT NOT NULL,
  contact TEXT NOT NULL
);
"#;