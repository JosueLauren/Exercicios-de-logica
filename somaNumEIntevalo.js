function sumAll(arr) {
    let maior = Math.max(arr[0], arr[1])
    let menor = Number(Math.min(arr[0], arr[1]))
    let soma = 0;
    for(let i = menor; i <= maior; i++){
      soma += i
    }
  
    return soma
  }
  
  let total = sumAll([1, 4]);
  
  console.log(total)  