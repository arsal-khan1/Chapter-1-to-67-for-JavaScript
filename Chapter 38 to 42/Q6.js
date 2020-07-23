function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}
var sent = prompt("Enter Character");
document.writeln(removeVowels(sent));