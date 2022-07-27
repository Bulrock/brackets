module.exports = function check(str, bracketsConfig) {
  let bracketsMap = {};
  bracketsConfig.forEach(element => {
      bracketsMap[element[0]] = element[1];
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    var currentBracket = str[i];
    var lastOpeningBracket = stack[stack.length - 1];
    if (bracketsMap[lastOpeningBracket] === currentBracket){
      stack.pop()
    } 
    else {
      stack.push(currentBracket);
    }
  }

  return stack.length === 0;
}
