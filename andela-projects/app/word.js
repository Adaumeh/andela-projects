module.exports ={
words:function(string){
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = [];
    for( var i  in word ; i < word.length,i++){
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;

    return freqMap;
}
	 
   
    






    


  







	
