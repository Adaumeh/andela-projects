
module.exports = {
objectOriented:function(value){
function programme (){ 
  constructor(title) 
    this.title = title;
    this. genre = genre;
    this.year = year;
    this.ratings = ratings;
    this.producer = producer;
    this.duration = duration ;
  }
  
 function play() {
    console.log(this.title + ' is about to start');
  }
function getInfo(){
    console.log(this.title + this.genre + this. year);
}
function getRating(){
    console.log("This movie is rated" + this.ratings);
}
function getYear(){
    console.log("Released" + this.year);
}
 function getDuration(){
    console.log("It plays for" + this.duration);
}
}
}
}

function movie = Object.create(programme){
    //constructor(title){
       // super(title,title);
    }
  replay:function(title) {
    console.log(this.title + ' is now showing');
  }
  getinfo:function(title){
    console.log("Now showing is"+ this.title + this.genre)




var  mymovie = new movie('Frozen', 'comic','2015', 'Edwin','0');


var  mymovie2 = new movie('24', 'action','2006', 'Baur','18');

var  mymovie3 = new movie('lost','epic','2008','18');
var  mymovie4 = new movie('Independents day', 'fiction','1999','smith','16');
var myRatings = new movie('lost','24','Independents day')
var news = new movie();
}
  }
