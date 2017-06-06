const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
//const repl = require('repl');
const db = new sqlite3.Database('./data.db');


function create(data){
  let queryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data.id}','${data.name}','${data.subject}');`
  return new Promise((resolve,reject) =>{
    db.run(queryCreate, (err) =>{
      if (!err) {
        return resolve ("Insert Data Success");
      } else {
        return reject (err);
      }
    })
  })
}

function read(){
  let queryRead = 'SELECT * FROM teacher';
   return new Promise( function(resolve,reject) {
     db.serialize(function() {
       db.all(queryRead, (err,data) =>{
         if(!err) {
           data.forEach (element => {
             return resolve(data);
           })
         } else {
           return reject(err);
         }
       })
     })
   })
}

function update(data) {
  let queryUpdate = `Update teacher SET name = '${data.name}', subject='${data.subject}' WHERE id = ${data.id}`;
   return new Promise( function(resolve,reject) {
     db.run(queryUpdate, (err) => {
       if(!err) {
         resolve(data)
       } else {
         reject(err)
       }
     })
   })
}

function deletes(id){
  let remove = `DELETE From teacher WHERE id = '${id}'`
  return new Promise ((resolve,reject) =>{
    db.run(remove, (err) =>{
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    })
  })
}





module.exports = {
  create, read, update, deletes
};
//
// var replServer = repl.start('>');
// replServer.context.create = create
// replServer.context.read = read
