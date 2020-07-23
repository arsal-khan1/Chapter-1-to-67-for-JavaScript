function Check(){
    var first = parseFloat(document.getElementById('letter').value);
	if (first>=65 && first<=90)
    {
        alert("Character is a uppercase letter");
    }
    else if(first>=97 && first<=122){
        alert("Character is a lowercase letter");
    }    
    else{
        alert("Not a letter");
    }
}
