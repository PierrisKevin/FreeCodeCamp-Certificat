function convertToRoman(num) {
    const dico = {
      1000 : "M",
      900 : "CM",
      500 : "D",
      400 : "CD",
      100 : "C",
      90 : "XC",
      50 : "L",
      40 : "XL",
      10 : "X",
      9 : "IX",
      5 : "V",
      4 : "IV",
      1 : "I"
    }
    const res = []
    let cpNum = num
    if(num in dico) return dico[num]
    while (cpNum>0){
        const nbr = String(cpNum).length
        if(nbr>1){

            const valAround = parseInt("1".padEnd(nbr,"0"))
            let orignAround = parseInt(String(cpNum)[0].padEnd(nbr,"0"))
            cpNum-=orignAround
            let repetition = 0

            while (String(orignAround).length>=String(valAround).length){
                if(orignAround in dico){
                    res.push(dico[orignAround])
                    break
                }
                else{
                    orignAround-=valAround
                    repetition++
                    if(orignAround in dico){
                        res.push(dico[orignAround])
                        break
                    }
                }
            }
            res.push(dico[valAround].repeat(repetition))

        }
        else{
            let anotherReapeat = 0
            while (cpNum>0){
                if(cpNum in dico){
                    res.push(dico[cpNum])
                    cpNum = 0
                }
                else{
                    cpNum--
                    anotherReapeat ++
                }
            }
            res.push(dico[1].repeat(anotherReapeat))
        }
    }
    return res.join("")
   }
   
console.log(convertToRoman(68));