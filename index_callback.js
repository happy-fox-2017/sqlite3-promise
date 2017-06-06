const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
//const repl = require('repl');
const db = new sqlite3.Database('./data.db');

function create(data,callback) {
  let queryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data.id}','${data.name}','${data.subject}')`;
  db.serialize( function() {
    db.run(queryCreate,callback)
  })
}

function read(data,callback) {
  let queryRead = 'SELECT * FROM teacher';
  db.serialize( function() {
    db.all(queryRead,callback)
  })
}

function update(data,callback) {
  let queryUpdate = `Update teacher SET name = '${name}', subject='${subject}' WHERE id = ${data.id}`;
  db.serialize( function() {
    db.run(queryUpdate, callback)
  })
}

function deletes(data,callback) {
  let remove = `DELETE from teacher WHERE id = ${id}`;
  db.serialize(function() {
    db.all(remove,callback)
  })
}
