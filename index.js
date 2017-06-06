const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

function create(data){
  let QueryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data.id}','${data.name}','${data.subject}');`
  return new Promise((resolve,reject) =>{
    db.run(QueryCreate, (err) =>{
      if (!err) {
        return resolve ("Sukses Inserted");
      } else {
        return reject (err);
      }
    })
  })
}

function read(){
  let QueryRead = `Select * From teacher;`;
  return new Promise ((resolve,reject) =>{
    db.all(QueryRead, (err,rows) =>{
      if(!err) {
        return resolve (rows);
      } else{
        return reject (err);
      }
    })
  })
}

function update(data){
  let QueryUpdate = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = '${data.id}'`
  return new Promise ((resolve,reject) =>{
    db.run(QueryUpdate, (err) =>{
      if(!err){
        return resolve(`Suskes Updated`);
      } else {
        return reject (err);
      }
    })
  })
}

function deletes(id){
  let QueryDelete = `Delete From teacher WHERE id = '${id}'`
  return new Promise ((resolve,reject) =>{
    db.run(QueryDelete, (err) =>{
      if (!err) {
        return resolve(`Sukses Deleted`);
      } else {
        return reject(err);
      }
    })
  })
}


module.exports = {
  create, read, update, deletes
};



