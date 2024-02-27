function sortArray(array) {
    // Return a sorted array.
    let oddArr = array.filter(e => e % 2).sort((a,b)=> a - b)
    return array.map((e) => e % 2 ? oddArr.shift() : e)
    console.log(oddArr)
    
  }
  
  /*
  explanation 
  array is an input of numbers
  we need to 
  
  psydo code
  create an empty array for the odd numbers 
  iterate through array - if num is odd push it to the empty array 
  sort the odd num array into ascending order 
  iterate through the array again 
  
  
  */