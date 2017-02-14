
var myApp = require('../app/ooplab.js');
(function(){
  'use strict';


describe("oop tests ", function() {
  describe("Case for some play", function() {
it("The movie  getInfo function should return the instance of the movie class", function() {
      var mymovie = new movie('frozen', '24', 'lost');
      expect(myApp.mymovie instanceof Car).toBeTruthy();
      });
it("The movie should be called 'public announcement' if no name is passed as a parameter", function() {
      var news = new programme();
      expect(myApp.news.title).toEqual('public announcement');
      expect(myApp.news.ratings).toBe('0');
    });
 it("The movie title and genre should be a property of the movie", function() {
      var mymovie  = new movie('frozen', 'comic');
      expect(myApp.movie.title).toBe('frozen');
      expect(myApp.genre).toBe('0');
    });
  it("The movie shoud be rated at least greater than 12 except its a comic", function() {
      var myRatings = new movie('lost','24','Independents day')
      expect(myApp.myRatings.getRating).toBe('greater than 12');
      expect(myApp.movie.isComic).toBe(false);
  });
it("The movie should have duration  more than 90 mins`", function() {
      var playdl  = new movie('lost', 'Independents day');
      expect(myApp.playdl.duration).toBe("This is series");
      playdl.duration(3);
      expect(myApp.playdl.duration).toBe('240 mins');
    });
});
});
})();
