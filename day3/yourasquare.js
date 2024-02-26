var isSquare = function(n){
    if(n < 0){
      return false;
    }else if(Number.isInteger(Math.sqrt(n))){
      return true;
    }else {
      return false;
    }
  }
  
  
  /*
  explanation 
  n input is an integer 
  need to determine if that input is a square number
  if so return true 
  else return false 
  
  code 
  if else statement 
  // check if num is not negative - can't make a perfect square root number from a negative num
  // check if the result of sqaure rooting n is a whole number - then should return true
  // else return false 
  https://javascript.plainenglish.io/javascript-algorithm-to-check-for-a-perfect-square-number-52cfd83c0757 
  
  */