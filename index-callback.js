const sqlite = require('sqlite3').verbose();
let file = "data.db";
let db = new sqlite.Database(file);

function create(data, callback){
  let QuerryCreate = `INSERT INTO teacher (id,name,subject) Values ('${data["id"]}','${data["name"]}','${data["subject"]}');`;
  db.serialize(() =>{
    db.run(QuerryCreate, callback)
  });
}

function read(callback){
  let QueryAll = "Select * From teacher";
  db.serialize(()=>{
    db.all(QueryAll, callback)
  });
}

function update(data,callback){
  let QueryUpdate = `UPDATE teacher SET name ='${data["name"]}', subject = '${data["subject"]}' WHERE id = '${data["id"]}'`
  db.serialize(()=>{
    db.run(QueryUpdate, callback)
  });
}

function deletes(id,callback){
  let QueryDelete = `DELETE FROM teacher Where id = '${id}'`;
  db.serialize(()=>{
    db.run(QueryDelete,callback);
  })

}


module.exports = {
  create, read, update, deletes
};
