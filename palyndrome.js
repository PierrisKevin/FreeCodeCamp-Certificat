function isLetter(char) {
    return /^[a-z]$/i.test(char);
  }
  function palindrome(str) {
    const res = []
    let source = ""
    str.split('').forEach((s)=>{
      if(isLetter(s) || (!isNaN(s) && s!=" ")) {
        source+=s.toLowerCase()
        res.push(s.toLowerCase())
    }
    })
    console.log(res)
    if(res.reverse().join("")==source) return true
    return false
  }
  
console.log(palindrome("1 eye for of 1 eye."));