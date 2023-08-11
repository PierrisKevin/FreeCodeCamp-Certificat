function isLetter(char) {
    return /^[A-Z]$/i.test(char);
  }
function rot13(str) {
  let res = ""
  for(let i=0; i<str.length;i++){
    if(isLetter(str[i])){
      let code = str.charCodeAt(i)+13
      if (code>90) code = (code - 90)+64
      res+=String.fromCharCode(code)
    }
    else res+=str[i]
  }
  return res
}

console.log(rot13("SERR PBQR PNZC"));