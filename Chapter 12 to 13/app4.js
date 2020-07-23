function checkPassword(){
    
    var checkPass = document.getElementById('pass').value;
    if(checkPass == ''){
        alert("Please enter your password");
    }
	if(checkPass == 'saylani')
    {
        alert("Correct!");
    }
    if(checkPass != 'saylani'){
        alert("Incorrect password");
    }  
    
}