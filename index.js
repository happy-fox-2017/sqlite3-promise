
const sqlite = require('sqlite3')
let file = './data.db'
const db = new sqlite.Database(file)

function create(data, callback){
  let query = `INSERT INTO teacher VALUES(${+data.id},'${data.name}','${data.subject}');`
  return new Promise(function (resolve,reject) {
    db.run(query,function (err) {
      if (!err) {
        resolve(callback)
      } else {
        reject(err);
      }
    })
  })
}

function read(callback){
  let query = `SELECT * from  teacher`
  return new Promise(function (resolve,reject) {
    db.all(query, (err,teachers) => {
      if (!err) {
        resolve(teachers)
      } else {
        reject(err)
      }
    })
  })
}

function update(callback){
  let query = `UPDATE teacher set name='kompas',subject='IPS' where id=1`
  return new Promise(function (resolve, reject) {
    db.run(query, (err) => {
      if (!err) {
        resolve(callback)
      } else {
        console.log(err);
      }
    })
  })
}

function remove(callback){
  let query = `DELETE from teacher where id=2`
  return new Promise(function(resolve, reject) {
    db.run(query, err => {
      if (!err) {
        resolve(callback)
      } else {
        console.log(err);
      }
    })
  })
}

module.exports = {
  create, read, update, remove
};
