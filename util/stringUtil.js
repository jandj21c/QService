var isEmpty = function(value) {
    if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ) {
       return true;
     }
   else{
       return false;
   }
 }
 
 var nameWithCommas = function(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }
 
 var trim = function(str){
   return str.replace(/(\s*)/g,"");
 }
 
 module.exports.isEmpty = isEmpty;
 module.exports.nameWithCommas = nameWithCommas;
 module.exports.trim = trim;
 