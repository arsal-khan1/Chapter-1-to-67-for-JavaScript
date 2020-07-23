var gfg = new Array(3); 
  
document.write("Creating 2D array <br>"); 
for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = []; 
} 
var h = 0; 
var s = "012310122101"; 
  
 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++) { 
  
        gfg[i][j] = s[h++]; 
    } 
} 
  
 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++) 
  
    { 
        document.write(gfg[i][j] + " "); 
    } 
    document.write("<br>"); 
} 