/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle){
      return 0;
    }
    for(let i in haystack){
      if((haystack[i] == needle.charAt(0)) && (haystack.substr(i, needle.length) == needle)){
        return i;
      }
    }
    return -1;
};

// function mySubStr(str, from, to) {
//   let rs = '';
//   for(let i = from; i < to +1; i++){
//     rs = rs + str.charAt(i);
//   }
//   return rs;
// }

let rs = strStr('hello', 'll');
console.log(rs);