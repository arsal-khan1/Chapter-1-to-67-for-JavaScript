var letter = prompt("Enter Alphabet")
var findVowel = function() {
    
    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return true;
         }
    }
    
    return false;

};

alert(letter + " " + "is a vowel? " + findVowel(letter));
