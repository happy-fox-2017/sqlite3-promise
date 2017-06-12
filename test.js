const crud = require('./index.js')

describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('should resolve and invoke callback done', function(done) {
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
    crud.update({ id: 1, name: 'John Doe', subject: 'Foo Bar'})
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

// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })



/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
// describe('CREATE promise', function() {
//   it('should resolve and invoke callback done', function(done) {
//     create()
//     .then(function() {
//       done()
//     })
//     .catch(function(err) {
//       done(err)
//     })
//   })
// })


