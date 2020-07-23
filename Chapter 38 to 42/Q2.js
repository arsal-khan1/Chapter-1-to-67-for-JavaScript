function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("GFG").innerHTML  
        = (year % 100 === 0) ? (year % 400 === 0) 
                             : (year % 4 === 0); 
} 