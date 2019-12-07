function generateCountAndChar(str) {
  let count = 0;
  let current = str.charAt(0);
  let rs = '';
  for(let i=0; i<str.length; i++){
    if(current == str.charAt(i)){
      count++;
    }else{
      rs = rs + count + current;
      count = 1;
      current = str.charAt(i);
    }
  }
  rs = rs + count + current;
  return rs;
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1';
  let i = 1;
  if(n == 1){
    return str;
  }
  while(i < n){
    str = generateCountAndChar(str);
    i++;
  }
  return str;
};

console.log(countAndSay(5));