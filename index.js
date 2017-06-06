let fs = require('fs')
// const repl = require('repl')
const sqlite = require('sqlite3').verbose()

let file = 'data.db'
let db = new sqlite.Database(file)

const Promise = require('promise');

function create(data) {
  let ADD = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}', '${data.name}', '${data.subject}');`;
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(ADD, function(err) {
        (!err) ? resolve(data): reject(err)
      })
    })
  })
}


function read(data) {
  let SEE = `SELECT * FROM teacher;`;
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.all(SEE, function(err, data) {
        (!err) ? resolve(data): reject(err)
      })
    })
  })
}

function update(data) {
  let RENEW = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}';`;
  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.run(RENEW, function(err){
        (!err) ? resolve(data) : reject(err)
      })
    })
  })
}

function deletes(id) {
  let REMOVE = `DELETE FROM teacher WHERE id = '${id}';`;
  return new Promise((resolve, reject) => {
    db.serialize(function(){
      db.run(REMOVE, function(err){
        (!err) ? resolve() : reject(err)
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
