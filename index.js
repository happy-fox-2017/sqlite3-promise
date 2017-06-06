const sqlite3 = require('sqlite3').verbose();

const file = 'data.db';
const db = new sqlite3.Database(file);

function create(data, callback) {
  db.run('INSERT INTO teacher VALUES (?, ?, ?)',
  [data.id, data.name, data.subject], callback);
}

function read(callback) {
  db.all('SELECT * FROM teacher', callback);
}

function update(data, callback) {
  db.run('UPDATE teacher SET name = ? WHERE id = ?',
  [data.name, data.id],
  callback);
}

function deletes(callback) {
  db.run('DELETE FROM teacher', callback);
}

module.exports = {
  create, read, update, deletes,
};
