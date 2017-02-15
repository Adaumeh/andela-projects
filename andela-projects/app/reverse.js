module.exports = {
reverseString : function(str) {
    if(str===null || str.length===0){
        
        return false;
    }
    var lastIndex=Math.ceil(str.length/2);
    for (var i = 0; i < lastIndex  && i< str.length; i++) {
        if (str[i] != str[word.length-1-i]) {
            return false;
        }
     }
     return true;
} 
}