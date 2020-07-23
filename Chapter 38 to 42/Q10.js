var amount=Number(prompt("Please Enter amount for withdraw:"));
function cash(){
    
            document.writeln("Required notes of Rs. 10: "+" "+(((amount%100)%50)/10)+"</br>");
       
            document.writeln("Required notes of Rs. 50: "+" "+((amount%100)%50)+"</br>");
            document.writeln("Required notes of Rs. 100: "+" "+amount/100+"</br>");
        
    
    document.writeln("Amount still remaing Rs.: "+" "+(((amount%100)%50)/10)+"</br>");
}
cash();