const repl = require('repl');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('data.db');

let replStart = repl.start({
  prompt: '>>> ',
  input: process.stdin,
  output: process.stdout
});

function create(id, name, subject){
  let query = `INSERT INTO teacher (id, name, subject) VALUES (${id}, '${name}', '${subject}');`;
  return new Promise( (resolve, reject) => {
    db.serialize( () => {
      db.run(query, (error) => error ? reject(error) : resolve());
    });
  });
}

function addRecord(id, name, subject) {
  create(id, name, subject)
    .then( () => {
      console.log("Add success..")
    })
    .catch( (err) => {
      console.log(err)
    });
    return "Process";
}

function read(){
  let query = `SELECT * FROM teacher;`;
  return new Promise( (resolve, reject) => {
    db.serialize( () => {
      db.all(query, (error,rows) => error ? reject(error) : resolve(rows));
    });
  });
}

function showRecords(data) {
  read()
    .then( (data) => {
      console.log(data)
    })
    .catch( (err) => {
      console.log(err)
    });
    return "Process";
}

function update(name, subject, id){
  let query = `UPDATE teacher SET name = '${name}', subject = '${subject}' WHERE id = ${id};`;
  return new Promise( (resolve, reject) => {
    db.serialize( () => {
      db.run(query, (error) => error ? reject(error) : resolve());
    })
  });
}

function updateRecord(name, subject, id) {
  update(name, subject, id)
    .then( () => {
      console.log("Update success..")
    })
    .catch( (err) => {
      console.log(err)
    });
    return "Process";
}

function deletes(id){
  let query = `DELETE FROM teacher WHERE id = ${id};`;
  return new Promise( (resolve, reject) => {
    db.serialize( () => {
      db.run(query, (error) => error ? reject(error) : resolve());
    });
  });
}

function deleteRecord(id) {
  deletes(id)
    .then( () => {
      console.log("Delete success..")
    })
    .catch( (err) => {
      console.log(err)
    });
    return "Process";
}

module.exports = {
  create, read, update, deletes
};

replStart.context.create = addRecord;
replStart.context.read = showRecords;
replStart.context.update = updateRecord;
replStart.context.deletes = deleteRecord;