function pairElement(str) {
    let arr = []
  
    const serch = function(item){
       switch(item){
        case "A": 
        arr.push(["A", "T"]);
        break;
        case "T": 
        arr.push(["T","A"]);
        break;
        case "C": 
        arr.push(["C","G"]);
        break;
        case "G": 
        arr.push(["G","C"]);
        break;
      }
    }
  
    for(let i = 0; i < str.length; i++){
      serch(str[i])
    }
  
    return arr
  }
  
  let arr = pairElement("GCG")
  
  console.log(arr)