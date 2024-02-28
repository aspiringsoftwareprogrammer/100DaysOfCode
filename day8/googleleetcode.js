/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let finalArray = [];
    let smallestSize = Math.min(word1.length, word2.length);
    for(i=0; i < smallestSize; i++){
        finalArray.push(word1[i] + word2[i]);
    }
    if(word1.length > word2.length){
        for(i=smallestSize; i < word1.length; i++){
            finalArray.push(word1[i]);
        }
    } 
    if(word1.length < word2.length) {
         for(i=smallestSize; i < word2.length; i++){
            finalArray.push(word2[i]);
        }
    }



    return finalArray.join("");
};
/**
Explanation 
you are given two inputs word1 and word2 - both of which are strings
they need to be combined in a special way
begin with word1 - alternate each letter with second word

- ask clarifying question 
- don't teach your solution - focus more on the intention
e.g. oh i am doing a for loop vs im doing a for loop to iterate 
- avoid describing instead explain 

Psydo code 


 */