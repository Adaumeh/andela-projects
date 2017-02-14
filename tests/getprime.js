
var myApp = require('../app/getprime.js');
describe("get prime tests ", function() {
  describe("Case for prime", function() {

    it("should return ''Invalid input' for  numbers < 0", function() {
      expect(myApp.getPrime(-25)).toEqual('Invalid input');
    });
     it("should return '[0]' for  numbers = 0", function() {
      expect(myApp.getPrime(0)).toEqual([0]);
    });

    it("should return []  for 'string'", function() {
      expect(myApp.getPrime('andela')).toEqual([]);
    });
 it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19,23 ] for  25", function() {
      expect(myApp.getPrime(25)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19,23 ]);
    });
 it("should return   [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(myApp.getPrime(20)).toEqual([0, 1, 2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
});