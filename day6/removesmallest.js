function removeSmallest(numbers) {
    if (numbers.length === 0) {
      return numbers; // If input is empty, return empty array
    }
    
    // Find the index of the smallest number
    let minIndex = numbers.indexOf(Math.min(...numbers));
    
    // Create a new array without the smallest number
    let result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
    
    return result;
  }
  