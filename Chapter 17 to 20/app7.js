function largestnumber()
{
var array = [24 , 53, 78, 91, 12];
var largest = array[0];



    

//for writing largest number from array
for (var i = 0; i < array.length; i++){
    document.write('Array item are:'+' '+array[i])+"<br>";
        document.write("<br>");
    var temp = array[i];
  
    if (temp > largest)
    {
        largest = array[i];
    }
}



document.write('The Largest number is :'+' '+ largest);





}