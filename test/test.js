const crud = require('../index.js')
const crudCall = require('../index_callback.js')
/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
 describe('Create Callback', function() {
   it('should invoke callback done', function(done) {
     crudCall.create({ id: 1, name: 'Jaajang', subject: 'Gray Fox'}, done());
   })
 });
 describe('Read Callback', function() {
   it('should invoke callback done', function(done) {
     crudCall.read(done());
   })
 });
 describe('Update Callback', function() {
   it('should invoke callback done', function(done) {
     crudCall.update({ id: 1, name: 'Fikri', subject: 'Happy Fox'}, done());
   })
 });
 describe('Delete Callback', function() {
   it('should invoke callback done', function(done) {
     crudCall.deletes(1, done());
   })
 });

// /**
//  * contoh testing function dengan promise
//  * comment apabila tidak digunakan
//  */
// describe('CREATE promise', function() {
//   it('should resolve and invoke callback done', function(done) {
//     crud.create()
//     .then(function() {
//       done()
//     })
//     .catch(function(err) {
//       done(err)
//     })
//   })
// })

//test mocha promise
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({ id: 1, name: 'Jumadi', subject: 'Happy Fox'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('should and invoke callback done', function(done) {
    crud.read()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('UPDATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.update({ id: 1, name: 'Angga', subject: 'Gray Fox'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('DELETE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.deletes(1)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
