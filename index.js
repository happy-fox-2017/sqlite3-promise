const sqlite = require ('sqlite3').verbose();
const db = new sqlite.Database('data.db');

function create(data){
  let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}');`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function(err) {
        if (!err) resolve ();
        else reject(err);
      });
    });
  });
}

function read(){
  let query = `SELECT * FROM teacher;`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.all(query, function(err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

function update(id, name, subject){
  let query = `UPDATE teacher SET name = '${name}', subject = '${subject}' WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function (err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

function remove(id){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  return new Promise ((resolve, reject) => {
    db.serialize(function() {
      db.run(query, function (err) {
        if (!err) resolve();
        else reject(err);
      });
    });
  });
}

module.exports = {
  create, read, update, remove
};