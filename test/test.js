const crud = require('../index.js')
let assert = require('assert')
/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
// describe('CREATE', function() {
//   it('should invoke callback done', function(done) {
//     crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar'}, done);
//   })
// })



/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
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

describe('read promise', function() {
  it('should give some data', function() {
    crud.read()
    .then(function(data) {
      data.should.eventually.have.length(9)
    })
    .catch(function(err) {
      done(err)
    })
  })
})

describe('update promise', function() {
  it('should update id 1 with name to kompas and subject to IPS', function (done) {
    crud.update({id:1, name:'kompas', subject:'IPS'})
    .then(function (teacher) {
      assert.equal('IPS', teacher.subject)
      done()
    })
    .catch(function (err) {
      done(err)
    })
  })
})

describe('delete id 2', function() {
  it('should delete id 2', function(done) {
    crud.remove(2)
    .then(function () {
      done()
    })
    .catch(function (err) {
      done(err)
    })
  })
})
