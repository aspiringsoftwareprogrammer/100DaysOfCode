function getSum(a, b){
    //Good luck!
   let result = []; // Initialize result as a number
   let start, end;
 
   // Determine which is the start and end based on the values of a and b
   if (a < b) {
     start = a;
     end = b;
   } else {
     start = b;
     end = a;
   }
 
   // Add each number from start to end (inclusive) to the result
   for (let i = start; i <= end; i++) {
     result.push(i);
   }
 let sum = 0;
 
 // calculate sum using forEach() method
 result.forEach( num => {
   sum += num;
 })
 
   return sum
  
 }