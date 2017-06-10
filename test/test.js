
const {create, read, update, remove} = require('../index.js');

describe('CREATE promise', function() {
  it('should invoke callback done', function(done) {
    create({ id: 1, name: 'John Doe', subject: 'Foo Bar'})
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('READ promise', function() {
  it('resolve and invoke callback done', function(done) {
    read()
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('UPDATE promise', function() {
  it('resolve and invoke callback done', function(done) {
    update(2, 'budiono', 'hasan')
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})

describe('REMOVE promise', function() {
  it('resolve and invoke callback done', function(done) {
    remove(2)
      .then(()=> {
      done()
    })
      .catch((err) => {
      done(err)
    })
  })
})
