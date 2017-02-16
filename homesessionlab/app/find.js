module.exports = {
findMissing : function(arr1,arr2){
	var a = arr1;
	var b = arr2;
	var c = a.concat(b);
	
	var diff =  c.pop(!b);
	
	if (Array === [] || arr1.length === arr2.length){
	return 0

	}else if( diff){
		c.sort()
		c.pop(!b);

//var d =  c.filter(function (item, pos) {return c.indexOf(item) == pos});

        // c.pop(c.filter(function (item, pos) {return c.indexOf(item) == pos}))
	return diff
}





	
}
}
