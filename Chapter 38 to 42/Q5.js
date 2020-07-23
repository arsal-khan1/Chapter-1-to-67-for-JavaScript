var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
var index = prompt("Enter Single Character.");
var replacingText = prompt("Enter Replacing Character.");
function indexOf(){
    var indexNum = text.indexOf(index);
    var firstText = text.slice(0,indexNum);
    var repText = replacingText;
    var thirdText = text.slice(indexNum+12);
    
    document.writeln(firstText + repText + thirdText);  
}

