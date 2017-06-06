"use strict"

const Promise = require('promise');

const sqlite = require('sqlite3').verbose();

let file = 'data.db';
let db = new sqlite.Database(file);

function create(data) {
  let ADD_DATA = `INSERT INTO teacher (id, name, subject) VALUES ('${data.id}','${data.name}','${data.subject}');`;

  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(ADD_DATA, function(err) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      })
    })
  })
}

function read() {
  let SHOW_DATA = `SELECT * FROM teacher;`;
  
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.all(SHOW_DATA, (err, data) => {
        if(!err) {
          return resolve(data);
        } else {
          return reject(err);
        }
      })
    })
  })
}

function update(data) {
  let UPDATE_DATA = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${data.id};`;
  
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(UPDATE_DATA, function(err) {
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
  let REMOVE_ROW = `DELETE FROM teacher WHERE id = ${id};`;
  
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.run(REMOVE_ROW, function(err) {
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