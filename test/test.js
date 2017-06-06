const assert = require('assert');
const crud = require('../index.js');

/**
 * contoh testing function dengan promise
 * comment apabila tidak digunakan
 */
describe('CREATE promise', function() {
  it('should resolve and invoke callback done', function(done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' })
    .then(function () {
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });
});

describe('READ promise', function() {

  before(function (done) {
    crud.deletes()
    .then(function () {
      return crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' });
    })
    .then(function () {
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });

  it('should contains one row', function (done) {
    crud.read()
    .then(function (data) {
      assert.equal(1, data.length);
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });
});

describe('UPDATE promise', function() {

  before(function(done) {
    crud.deletes()
    .then(function () {
      return crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' });
    })
    .then(function () {
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });

  it('should contains name as Budi', function (done) {
    crud.update({ id: 1, name: 'Budi' })
    .then(function () {
      return crud.read()
    })
    .then(function (data) {
      const row = data[0];
      assert.equal('Budi', row.name);
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });
});

describe('DELETE promise', function() {

  before(function(done) {
    crud.create({ id: 1, name: 'John Doe', subject: 'Foo Bar' })
    .then(function () {
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });

  it('should contains no row', function (done) {
    crud.deletes()
    .then(function () {
      return crud.read()
    })
    .then(function (data) {
      assert.equal(0, data.length);
      done();
    })
    .catch(function (err) {
      done(err);
    });
  });
});
