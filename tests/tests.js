  var myApp = require('../app/library.js');

describe("Fizz Buzz tests", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).toBe('Fizz');
  });
  it("should return `Buzz` for 200", function() {
    expect(myApp.fizzBuzz(200)).toBe('Buzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).toBe(7);
  });
   it("should return 22  since is indivisible by both", function() {
    expect(myApp.fizzBuzz(22)).toBe(22);
  });
  
it("should return 'FizzBuzz'  since is divisible by both", function() {
    expect(myApp.fizzBuzz(75)).toBe('FizzBuzz');
  });

it("should return 'FizzBuzz'  since is divisible by both", function() {
    expect(myApp.fizzBuzz(60)).toBe('FizzBuzz');
  });


  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).toBe(101);
  });

});


