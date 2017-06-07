"use strict"
const pr = require('promise');
const sqlite = require('sqlite3').verbose();

var file = 'data.db';
var db = new sqlite.Database(file);

function create(data) {
  let INPUT = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}','${data.name}','${data.subject}');`;

  return new pr((res, rej) => {
    db.serialize(() => {
      db.run(INPUT, err => {
        (!err) ? res(data): rej(err);
      });
    });
  });
}

function read() {
  let LIHAT = `SELECT * FROM teacher;`;
  
  return new pr((res, rej) =>{
    db.serialize(() => {
      db.all(LIHAT, (err, data) =>{
        (!err) ? res(data): rej(err);
      });
    });
  });
}

function update(data) {
  let UPDATE = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}';`;
  
  return new pr((res, rej) =>{
    db.serialize(() => {
      db.run(UPDATE, err =>{
        (!err) ? res(data): rej(err);
      });
    });
  });
}

function deletes(id) {
  let HAPUS = `DELETE FROM teacher WHERE id = '${id}';`;
  
  return new pr((res, rej) =>{
    db.serialize(() =>{
      db.run(HAPUS, err => {
        (!err) ? res() : rej(err);
      });
    });
  });
}

module.exports = {
  create,
  read,
  update,
  deletes
};

// r.contect
