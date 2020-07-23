function isCheck(){
    var T = document.getElementById('temp').value;
    
    if(T>40){
          alert("It is too hot outside");
    }
    else if(T>30){
        alert("The Weather today is Normal.");
    }
    else if(T>20){
        alert("Today’s Weather is cool.");
    }
    else{
        alert("OMG! Today’s weather is so Cool.");
    }
}
   
   