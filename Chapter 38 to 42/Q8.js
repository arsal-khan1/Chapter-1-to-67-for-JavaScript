var km = Number(prompt("Enter distance in kilometers: "));
function meter(){
    var m = km * 1000;
    return m;
}
function feet(){
    var f = km * 3280.84;
    return f;
}
function inches(){
    var inc = km * 39370.08;
    return inc;
}
function centimeters(){
    var cm = km * 1000 * 100;
    return cm;
}
document.writeln("The distance in Feet:"+""+feet()+"</br>");
document.writeln("The distance in :Inches"+""+inches()+"</br>");
document.writeln("The distance in Meters:"+""+meter()+"</br>");
document.writeln("The distance in Centimeters:"+""+centimeters()+"</br>");
