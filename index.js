const sqlite3 = require('sqlite3').verbose();

const file = 'data.db';
const db = new sqlite3.Database(file);

function create(data) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO teacher VALUES (?, ?, ?)',
    [data.id, data.name, data.subject], (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

function read() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM teacher', (err, rows) => {
      if (!err) {
        resolve(rows);
      } else {
        reject(err);
      }
    });
  });
}

function update(data) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE teacher SET name = ? WHERE id = ?',
    [data.name, data.id],
    (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

function deletes() {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM teacher',
    (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  create, read, update, deletes,
};
