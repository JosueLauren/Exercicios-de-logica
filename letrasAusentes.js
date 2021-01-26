function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let len = str.length
    let start = alphabet.indexOf(str[0])
    for(let i = start; i < start + len; i++){
      if(!str.includes(alphabet[i])){
        return alphabet[i]
      }
    }
  
    return undefined
  }
  
  let letras = fearNotLetter("abce");
  
  console.log(letras)