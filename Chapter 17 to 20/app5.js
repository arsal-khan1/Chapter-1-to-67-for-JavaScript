function Series()
{
    document.write("<b>"+"Counting:"+"<br>")

var i;
var sum=2;
for(i=0;i<=15;i++)
{
  document.write(i);
  document.write(',');

}

document.write("<br>")
document.write("<b>"+"Reverse Counting:"+"<br>")

for(i=10;i>0;i--)
{
    document.write(i);
  document.write(',');
}
document.write("<br>")
document.write("<b>"+"Even:"+"<br>")
for(i=0;i<=20;i++)
{

    if ((i % 2) === 0) {
        document.write(i);
        document.write(',');  
      }
   
}
document.write("<br>")
document.write("<b>"+"Odd:"+"<br>")
for(i=0;i<=20;i++)
{

    if ((i % 2 !== 0 )) {
        document.write(i);
        document.write(',');  
      }
   
}
document.write("<br>")
document.write("<b>"+"Series:"+"<br>")
for(i=0;i<20;i+=2)
{
     
        document.write(i+2+'k');
        document.write(',');  
      
   
}
}

