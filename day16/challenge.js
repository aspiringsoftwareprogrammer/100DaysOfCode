var capitals = function (word) {
	// Write your code here
let result = []
let wordArr = word.split("")
//console.log(wordArr)

wordArr.map((letter, position)=>{
 if(letter === letter.toUpperCase()){
  result.push(position)
}
})
return result
};

/*
Plan 
we want to iterate through the word array - we can use the map method
if the letter is caps we need to push the position it is in 
into an empty array 
and return that array 

*/