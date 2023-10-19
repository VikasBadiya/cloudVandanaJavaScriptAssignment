//A. Take a sentence as an input and reverse every word in that sentence. 
//a. Example - This is a sunny day > shiT si a ynnus yad.

var inputSentence = "This is a sunny day";

var words = inputSentence.split(" ");
var reversedSentence ="";

for(var i = 0 ; i < words.length; i++){
    var reversedWord ="";
    var wordLength = words[i].length;
    for(var j = wordLength-1 ; j >=0;j--){
        reversedWord +=words[i].charAt(j);
    }
    reversedSentence+=reversedWord+" ";
}

console.log(reversedSentence);



