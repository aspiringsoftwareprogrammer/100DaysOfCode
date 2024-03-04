function removeEveryOther(arr){
    //your code here
    let result = []
    for(let i =0; i < arr.length; i++){
      if(i % 2 === 0){
        result.push(arr[i])
      }
    }
    return result
  }
  
  /*
  explanation 
  i have an array arr that contains strings 
  i want to iterate through the string and remove every second element
  i want to remove that value 
  and return modified array 
  if there is only one value in array just simply return that array value
  
  psydo code
  we create an empty array this is where we return the modified array 
  then we need to loop through the array 
  
  
  
  **/