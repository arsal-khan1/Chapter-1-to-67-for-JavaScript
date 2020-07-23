function mainFunction(){
   var av= average(a,b,c);
   var pe = percentagee(a,b,c,d);
   document.writeln("Average marks:"+" "+av+"</br>"+"Percentage:"+" "+pe);
}


var a = Number(prompt("Enter Number of Math"));
var b = Number(prompt("Enter Number of Computer"));
var c = Number(prompt("Enter Number of Physic"));
var d = Number(prompt("Enter Total Number"));

function average(a,b,c){
    var averages = (a+b+c)/3;
    return averages;
}

function percentagee(a,b,c,d){
    var perc = ((a+b+c)*100)/d;
    return perc;
}


console.log(mainFunction());
