
module.exports ={
fizzBuzz: function(n){
if(n%5 === 0 && n%3 === 0){
 return('FizzBuzz');

}else if(n%3 === 0){
  return('Fizz');

 }else if(n%5 === 0){
     return('Buzz');
 }else if(n !== Number){
     return('Invalid value')
 }
 else{
     return(n);   
     }
 }
}
