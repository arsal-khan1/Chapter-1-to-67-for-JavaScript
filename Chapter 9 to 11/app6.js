document.write("<h1>Marks Sheet</h1>");
var Mark = +prompt("Enter Total Marks")
var phy = +prompt("Enter Physic mark")
var comp = +prompt("Enter Computer mark")
var math = +prompt("Enter math mark")
var total = phy + comp + math;
var a = total * 100;
var percentage = a/Mark;
document.writeln("Total Marks: " + Mark + "</br>");
document.writeln("Total obtained: " + total+"</br>");
document.writeln("Percentage: " + percentage + "%" + "</br>");
var a = "A-one";
var b = "A";
var c = "B";
var d = "Fail";
var w = "Excellent";
var x = "Good";
var y = "You need to improve";
var z = "Sorry";
if(percentage>=80 && percentage <= 100){
    document.writeln("Grade: " + a + "</br>");
    document.writeln("Remarks: " + w + "</br>");
}
else if(percentage>=70 && percentage <= 79){
    document.writeln("Grade: " + b + "</br>");
    document.writeln("Remarks: " + x + "</br>");
}
else if(percentage>=60 && percentage <= 69){
    document.writeln("Grade: " + c + "</br>");
    document.writeln("Remarks: " + y + "</br>");
}
else if(percentage>=0 && percentage <= 59){
    document.writeln("Grade: " + d + "</br>");
    document.writeln("Remarks: " + z + "</br>");
}
