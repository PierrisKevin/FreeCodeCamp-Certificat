function matchNumber(str){
    const regex1 = /^\d{3}-\d{3}-\d{4}$/
    const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/
    const regex3 = /^\d{10}$/
    if (regex1.test(str) || regex2.test(str) || regex3.test(str)) return true
    return false;
  }
  
  function telephoneCheck(str) {
    let newStr = str.replace(" ","")
    console.log(newStr)
    if (newStr[0]=="1"){
      newStr=newStr.split("").slice(1,newStr.length).join("").split(" ").join("")
    }
    console.log(newStr)
    return matchNumber(newStr)
  }
  
  const string  = "1 555-555-5555"
console.log(telephoneCheck(string));
// console.log(matchNumber(string))