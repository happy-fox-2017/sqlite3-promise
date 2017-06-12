'use strict'

const Promise = require ('promise');
// const repl = require('repl');
const sqlite = require('sqlite3').verbose();

let file = 'data.db';
let db = new sqlite.Database(file);


function create(data) {
  let TAMBAH = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}');`;

  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(TAMBAH, function(err) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      })
    })
  })
}

function read(){
  let LIHAT = `SELECT * FROM teacher;`;

  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.all(LIHAT, function(err, data) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      })
    })
  })
}

function update(data) {
  let UPDATE = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}';`;

  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(UPDATE, function(err) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      })
    })
  })
}

function deletes(id) {
  let HAPUS = `DELETE FROM teacher WHERE id = '${id}';`;

  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(HAPUS, function(err) {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      })
    })
  })
}

module.exports = {
  create,
  read,
  update,
  deletes
};

// module.exports = {
//   create, read, update, deletes
// };

// const r = repl.start(">>  ");
// r.context.create = create;
// r.context.read = read;
// r.context.update = update;
// r.context.deletes = deletes;


