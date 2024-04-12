/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    for(let i=0; i< nums.length; i++){
        for(let j=i + 1; j <nums.length; j++){
            if(nums[i] + nums[j] === target){
                arr.push(i,j)
                 return arr
            }
        }
    }
    
};


/**
Plan 
we can use nested loops to see if the values add up to target
if they do, we need to return their positions 
 */