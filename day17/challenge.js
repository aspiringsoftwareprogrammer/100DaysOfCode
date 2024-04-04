/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i <nums.length; i++){
      for(let j=1; j < nums.length; j++){
          if(nums[i] + nums[j] === target){
              return [i,j]
          }
      }
    }
    return []
  };
  /**
  Plan 
  we need to iterate through nums, one in which we can also iterate through the indices of said array
  we could use a nested loop to go through each number and to compare it with the next number we use 
  nested loops 
  
   */