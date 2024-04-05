/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringNum = x.toString() // convert num to string to easily access them via []
    let start = 0;
    let end = stringNum.length -1
    
    while(start < end){
        if(stringNum[start] !== stringNum[end]){
            return false
        }
        start++
        end--
    }
        return true 
};