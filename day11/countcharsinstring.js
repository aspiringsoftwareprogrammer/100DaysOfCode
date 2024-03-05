function count(string) {
    // TODO
   // empty object to return 
    let result = {}
    // iterate through the string 
    for(let char of string){
      if(result[char]){
        result[char]++;
      }else{
        result[char] = 1
      }
    }
    return result
   
  }
  
  
  /*
  explanation 
  string is a string of random letters 
  we need to return an object - the key needs to be the 
  alphabetical string and the value is its occurance
  if string empty return empty 
  
  psydo code 
  create an empty object -- this is the object we will return with the new value 
  to count the string we could convert the string to array 
  and loop through the array 
  
  
  */