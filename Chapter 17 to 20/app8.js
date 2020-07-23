function smallestnumber()
{
    var array = [24 , 53, 78, 91, 12];
    
  
        
    
    //for writing smallest number from array
    var smallest = array[0];
    for (var i = 0; i < array.length; i++){
        document.write('Array item are:'+' '+array[i])+"<br>";
        document.write("<br>");
        var temp = array[i];
      
        if (temp < smallest)
        {
            smallest = array[i];
        }
    }

    document.write('The smallest number is :'+' '+ smallest);
}