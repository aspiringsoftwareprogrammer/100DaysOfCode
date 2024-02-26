function findShort(s) {
    let arr = s.split(" ");
    
    // Sort the array based on word length
    arr.sort((a, b) => {
      return a.length - b.length;
    });
    
    // The first element of the sorted array will be the shortest word
    let shortestLength = arr[0].length;
    
    return shortestLength;
  }
  
  
  
  
  /*
  explanation
  s input is string of words - find the shortest word and return the count of that short word
  psydo code
  convert string to array 
  
  
  
  */