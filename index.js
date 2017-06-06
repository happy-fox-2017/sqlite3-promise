const sqlite3 = require('sqlite3').verbose();
let file = "data.db";
let db = new sqlite3.Database(file);

function create(data, callback) {
  db.serialize(() => {
    let query = `INSERT INTO teacher VALUES('${data.id}','${data.name}','${data.subject}')`
    db.run(query, (err) => {
      if (err) {
        console.log(err);
      } else {
        callback();
      }
    })
  })
}

function read(callback) {
  let show = 'SELECT * FROM teacher';
  db.all(show, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback()
      // console.log(data);
    }
  });
}

function update(data, callback) {
  db.serialize(() => {
    let query = `UPDATE teacher SET ${data.attribute} = '${data.value}' WHERE teacher.id = ${data.id}`;
    db.run(query, (err) => {
      if (err) {
        console.log(err);
      } else {
        callback()
      }
    });
  });
}

function deletes(id, callback) {
  let query = `DELETE FROM teacher WHERE teacher.id = ${id}`;
  db.serialize(() => {
    db.run(query, (err) => {
      if (err) {
        console.log(err);
      } else {
        callback()
      }
    });
  });
}

function createPromise(data){
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO teacher VALUES (${data.id}, '${data.name}', '${data.subject}')`
    db.run(query, (err) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function readPromise() {
  return new Promise ((resolve, reject) => {
    let query = `SELECT * FROM teacher`
    db.all(query, (err,rows) =>{
      if (!err) {
        resolve(rows)
      } else {
        reject(err)
      }
    })
  })
}

function updatePromise(data) {
  return new Promise((resolve,reject) => {
    let query = `UPDATE teacher SET id = ${data.id}, name = '${data.name}', subject = '${data.subject}'`
    db.run(query, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function deletesPromise(id) {
  return new Promise((resolve,reject) => {
    let query = `DELETE FROM teacher WHERE id = ${id}`
    db.run(query, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}





module.exports = {
  create,
  read,
  update,
  deletes,
  createPromise,
  readPromise,
  updatePromise,
  deletesPromise
};