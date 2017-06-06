const sqlite = require('sqlite3').verbose();
let file = 'data.db';
let db = new sqlite.Database(file);


function create(data, callback){
  let create = `INSERT INTO teacher (id,name,subject) VALUES('${data.id}','${data.name}','${data.subject}')`;
  db.run(create,(err) =>{
    if (err) {
      console.log(err);
    }else {
      console.log('create success');
    }
  })
}

function read(callback){
  let read = `SELECT * FROM teacher`;
  db.all(read, (err,rows) =>{
    if (err) {
      console.log(err);
    }else {
      console.log(rows);
    }
  })
}

function update(data, callback){
  let update = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}'
              WHERE id = '${data.id}'`;
  db.run(update, (err) => {
    if (err) {
      console.log(err);
    }else {
      console.log('update success');
    }
  })
}

function deletes(id,callback){
  let deleteData = `DELETE FROM teacher WHERE id = '${id}'`;
  db.run(deleteData,(err) =>{
    if (err) {
      console.log(err);
    }else {
      console.log('delete success');
    }
  })
}

//////////////////////////////////////////////////////////////////////////////

function createData(data){
  let createData = `INSERT INTO teacher(id,name,subject) VALUES('${data.id}','${data.name}','${data.subject}')`;
  return new Promise((resolve,reject) =>{
    db.run(createData,(err)=>{
      if (!err) {
        return resolve('create success')
      }else {
        return reject(err)
      }
    })
  })
}

function readData(){
  let readData = `SELECT * FROM teacher`;
  return new Promise((resolve,reject) => {
    db.all(readData,(err,rows) =>{
      if (!err) {
        return resolve(rows)
      }else {
        return reject(err)
      }
    })
  })
}

function updateData(data){
  let updateData = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}'
                    WHERE id = '${data.id}'`;
                    console.log(updateData);
  return new Promise((resolve, reject) => {
    db.run(updateData,(err)=>{
      if (!err) {
        return resolve(data)
      }else {
        return reject(err)
      }
    })
  });
}

function deleteData(id){
  let deleteData = `DELETE FROM teacher WHERE id = '${id}'`;
  return new Promise(function(resolve, reject) {
    db.run(deleteData,(err) =>{
      if (!err) {
        return resolve('delete sukses')
      }else {
        return reject(err)
      }
    })
  });
}

module.exports = {
  create, read, update, deletes,
  createData, readData, updateData, deleteData
};
