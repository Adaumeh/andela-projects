module.exports = {
findMinMax:function(array){
  var newarray = [];
 for(var i in array){
var numbers = array;
 var y = Math.max(...numbers);
var x = Math.min(...numbers);
if (y == x){
  newarray.push(y||x);
  return newarray;
}
else{ 
  newarray.push(x);
  newarray.push(y);
  return newarray;
 }
  
}
  }
}