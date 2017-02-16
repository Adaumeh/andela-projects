module.exports ={
words : function(String) {
  var temp= 'string';
 var new_words =new Array();
words=temp.split(" ");

var unique = {};


            for (var i = 0; i < new_words.length; i++) {
                var word = new_words[i];
                console.log(word);

                if (word in unique)
                {
                    console.log("word found");
                    var count  = unique[word];
                    count ++;
                    unique[word]=count;
                }
                else
                {
                    console.log("word NOT found");
                    unique[word]=1;
                }
            }
        }
    }



	 
   
    






    


  







	
