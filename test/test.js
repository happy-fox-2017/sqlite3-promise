const assert = require('assert');
const crud = require('../index.js');

/**
 * contoh testing function dengan callback
 * comment apabila tidak digunakan
 */
describe('CREATE', function() {
  it('should invoke callback done', function (done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' }, (err) => {
      if (!err) {
        done();
      } else {
        done(err);
      }
    });
  })
});

describe('READ', function() {

  before(function(done) {
    crud.deletes(() => {
      crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' }, done);
    });
  });

  it('should contains one row', function (done) {
    crud.read((err, rows) => {
      if (!err) {
        assert.equal(1, rows.length);
        done();
      } else {
        done(err);
      }
    });
  })
});

describe('UPDATE', function() {

  before(function(done) {
    crud.deletes(() => {
      crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' }, done);
    });
  });

  it('should contains name as Budi', function (done) {
    crud.update({ id: 1, name: 'Budi' }, (err) => {
      if (!err) {
        crud.read((err, rows) => {
          const row = rows[0];
          assert.equal('Budi', row.name);
          done();
        });
      } else {
        done(err);
      }
    });
  })
})

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    create()
    .then(function() {
      done()
    })
    .catch(function(err) {
      done(err)
    })
  })
})
