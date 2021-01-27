function uniteUnique(...arr) {
    let finalArray = [];
  
    for(let i = 0; i < arr.length; i++){
      let arrArguments = arr[i];
  
    for(let j = 0; j < arrArguments.length; j++){
      let indexValue = arrArguments[j]
  
      if(finalArray.indexOf(indexValue) < 0){
         
         finalArray.push(indexValue)
  
        }
      }
    }
  
    return finalArray
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);