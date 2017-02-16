
module.exports = {
getPrime:function(x){
var ar = [],
    limit = 10,
    n, divisor;
 if(x < 0){
    return('Invalid input')
}else if (x === 0){
    return [0]
} 
else if(typeof x === String) {
  return [];
}else{   

     for (var counter = 0; counter <= x; counter++) {
            var notPrime = false;
            for (var i = 2; i <= ar.length && !notPrime; i++) {
                if (counter%ar[i]===0) {
                    notPrime = true;
                }
            }
            if (notPrime === false) ar.push(counter);
        }
        return ar
    }
    }

}//

