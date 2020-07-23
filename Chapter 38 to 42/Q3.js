function triangle(a,b,c){

    var s = (a+b+c)/2;
    var ar = Math.sqrt(s*(s-a)*(s-b)*(s-c));
return ar;
}



var a = Number(window.prompt("Enter Value of a"));
var b = Number(window.prompt("Enter Value of b"));
var c = Number(window.prompt("Enter Value of c"));
document.writeln(triangle(a,b,c));