const { createServer } = require('node:http');
const sqlite3 = require('sqlite3').verbose();


const path = require('path');
const dbPath = path.resolve(__dirname, 'database.sqlite'); // Ensure the path is correct
const db = new sqlite3.Database(dbPath);

const Session = require("./sqlite/migrations/sessions.js")

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

});

server.listen(port, hostname, () => {
    const session = new Session().up();

    let query = `
        CREATE TABLE IF NOT EXISTS ${session.table} (
    `;

    console.log(query);

    session.columns.forEach((column) => {
        console.log(column);
        if (column.type === 'string') {
            query += ` ${column.name} TEXT ${column.primary ? 'PRIMARY KEY' : ''} ${column.unique ? 'UNIQUE' : ''},`
        }

        if (column.type === 'integer') {
            query += ` ${column.name} INTEGER ${column.primary ? 'PRIMARY KEY' : ''} ${column.unique ? 'UNIQUE' : ''}`
        }
    });

    query += ')';
    console.log(query);

    db.run(query, (err) => {
        if (err) {
            console.error("Error creating table:", err);
        } else {
            console.log("Table created successfully");
        }
    });

    // Example: Query all rows in the Users table
    db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
        if (err) {
            console.error("Error retrieving tables:", err.message);
        } else {
            console.log("Tables:", rows.map(row => row.name));
        }
    });
});
