function minMax(arr){
    let result = []
    
    // min value 
    let lowVal = Math.min(...arr)
    result.unshift(lowVal)
    console.log(lowVal)
    
    
   // max value 
    let highVal = Math.max(...arr)
    //console.log(highVal)
    result.push(highVal)
    
    return result;
  
  
  }