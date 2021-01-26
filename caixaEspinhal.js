function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  
  let spin = spinalCase('This Is Spinal Tap');
  
  console.log(spin)
  