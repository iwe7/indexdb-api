var expect = chai.expect;
var getType = Object.prototype.toString;
mocha.ui('bdd');

describe('db.js', function(){

  //clear dbs
  describe('deleteDB(\'abc\')', function() {
    it('should return undefined', function() {
      return IndexDB.deleteDB('abc').then(function(res) {
        expect(res).equal(undefined);
      });
    });
  });

  describe('createDB(\'abc\')', function() {
    it('should return a IDBDatabase instance named \'abc\'', function() {
      return IndexDB.createDB('abc').then(function(db) {
        expect(db instanceof IDBDatabase).equal(true);
        expect(db.name).equal('abc');
        return db;
      });
    });
  });

  describe('getDBNames()', function() {
    it('should return an array', function() {
      return IndexDB.getDBNames().then(function(dbNames) {
        expect(typeof dbNames.length).equal('number');
      });
    });
  });

  describe('getDB(\'abc\')', function() {
    it('should return a IDBDatabase instance named \'abc\'', function() {
      return IndexDB.getDB('abc').then(function(db){
        expect(db instanceof IDBDatabase).equal(true);
        expect(db.name).equal('abc');
      });
    });
  });
});
