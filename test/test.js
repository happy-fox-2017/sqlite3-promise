const crud = require('../index.js')

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */

describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({ id: 2, name: 'John Doe', subject: 'Foo Bar'})
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
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
    crud.update({id: 2, name: 'Ahmad Fajar', subject: 'Anime'})
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
    crud.deletes(0)
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})