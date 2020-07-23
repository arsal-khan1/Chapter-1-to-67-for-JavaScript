var multiTable = +prompt("Enter a number to show its multiplication table");
var multiLenght = +prompt("Enter length multiplication table");

document.write("Multiplication table of"+ " "+multiTable+"</br>");
document.write("Lenght"+" "+multiLenght+"</br>");
for(var a=1; a<=multiLenght; a++){
document.write(multiTable + "x" + a + "=" + multiTable*a+"</br>");
}