/*
param s, '(){}[]'
return boolean
boolean function(string s){
  stack store brackets
  stack store pop element from brackets stack
  foreach charat string
    if find any open bracket, push to brackets stack
    if find a close bracket
      while, pop element store to another stack, untill find close
      pop element stack should empty
  at last, if brackets not empty, return false
}
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  let storyInnerBrackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
      arr.push(s.charAt(i));
    }

    if (s.charAt(i) == ')') {
      let hasOpen = false;
      while (arr.length > 0) {
        let popEle = arr.pop();
        if (popEle != '(') {
          storyInnerBrackets.push(popEle);
        }
        if (popEle == '(') {
          hasOpen = true;
          break;
        }
      }
      if (hasOpen && storyInnerBrackets.length == 0) {
        continue;
      }
      return false;
    }
    
    if (s.charAt(i) == ']') {
      let hasOpen = false;
      while (arr.length > 0) {
        let popEle = arr.pop();
        if (popEle != '[') {
          storyInnerBrackets.push(popEle);
        }
        if (popEle == '[') {
          hasOpen = true;
          break;
        }
      }
      if (hasOpen && storyInnerBrackets.length == 0) {
        continue;
      }
      return false;
    }
    
    if (s.charAt(i) == '}') {
      let hasOpen = false;
      while (arr.length > 0) {
        let popEle = arr.pop();
        if (popEle != '{') {
          storyInnerBrackets.push(popEle);
        }
        if (popEle == '{') {
          hasOpen = true;
          break;
        }
      }
      if (hasOpen && storyInnerBrackets.length == 0) {
        continue;
      }
      return false;
    }
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
};