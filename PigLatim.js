function translatePigLatin(str) {
    if(str.match(/^[aeiou]/)) return str + "way";
  
    let consoant = str.match(/^[^aeiou]+/)[0];
    return str.substring(consoant.length) + consoant + "ay";
  }
  
  let val = translatePigLatin("consonant");
  console.log(val)