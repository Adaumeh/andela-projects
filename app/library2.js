module.exports = {
aritGeo:function(array){
 var array;
 for(var i in array){
  if(array[1]-array[0] === array[2] - array[1]){
   return 'Arithemetic';
 }else if(array[1]/array[0] === array[3]/array[2]){
   return 'Geometric';
 }
 else{
   return -1;
 }
 } 
}
}