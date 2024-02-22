package day2;
public class Kata {
    public static int[] invert(int[] array) {
      
      for(int i = 0; i < array.length; i++ ){
        if(array[i] == 0){  // if num is 0 return 0
        }else if(array[i] > 0){ // if num is positive return negative
          array[i] *= -1;
        } else { // if num is negative return positive
          array[i]*= -1;
        } 
      }
    return array;
    }
  }
  
  /*
  so i need to find a way to iterate through each number of the array
  then i can create an if else statement 
  if num is positive - make it negative
  if num is negative - make it positive
  return new array with changes values 
  */