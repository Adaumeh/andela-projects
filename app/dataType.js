module.exports = {
dataTypes:function(value){ 
  
  if (value === undefined || value === null) {
  return 'no value';
} else if (value instanceof Array  && value.length >= 3 ){
  return  value[2];
}else if(value instanceof Array && value.length < 3 ){
  return undefined
}
else if(value.length <= 0){
   return 0
}else if(value  === 100 ){
    return 'equal to 100';
  }else if(value  < 100  ){
  
    return 'less than 100';
  }else if(value > 100 && value !== typeof 'String' ){
    return 'more than 100';
  }
else if(typeof(value  === String && value.length !== '')){
    return value.length;
  }else if( typeof value === true){
    return true
  } else if( typeof( value  ===  'function')){
      var callback = function(){
     dataTypes(true)}
    return dataTypes(true)}
  
 
}
  
}




