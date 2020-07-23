

//question 6a
function result()
{
var subject1=window.prompt("Enter subject1: ");
var subject2=window.prompt("Enter subject2: ");
var subject3=window.prompt("Enter subject3: ");
//b
var totalmarkssubject1=100
var totalmarkssubject2=100
var totalmarkssubject3=100

//c
var obtainedmarksforfirstsubject=Number(window.prompt("Enter obtained marks of subject1: "));
//d
var obtainedmarksforsecondsubject=Number(window.prompt("Enter obtained marks of subject2: "));
var obtainedmarksforthirdsubject=Number(window.prompt("Enter obtained marks of subject3: "));
//e

var Percentagesubject1=obtainedmarksforfirstsubject/totalmarkssubject1*100;
var Percentagesubject2=obtainedmarksforsecondsubject/totalmarkssubject2*100;
var Percentagesubject3=obtainedmarksforthirdsubject/totalmarkssubject3*100;
var total1=totalmarkssubject1+totalmarkssubject2+totalmarkssubject3;
var total2=obtainedmarksforfirstsubject+obtainedmarksforsecondsubject+obtainedmarksforthirdsubject;
var total3=(Percentagesubject1+Percentagesubject2+Percentagesubject3)/3;


document.getElementById("subject1").innerText = subject1;
document.getElementById("subject2").innerText = subject2;
document.getElementById("subject3").innerText = subject3;
document.getElementById("TotalMarkssubject1").innerText = totalmarkssubject1;
document.getElementById("TotalMarkssubject2").innerText = totalmarkssubject2;
document.getElementById("TotalMarkssubject3").innerText = totalmarkssubject3;
document.getElementById("MarksObtainedsubject1").innerText = obtainedmarksforfirstsubject;
document.getElementById("MarksObtainedsubject2").innerText = obtainedmarksforsecondsubject;
document.getElementById("MarksObtainedsubject3").innerText = obtainedmarksforthirdsubject;
document.getElementById("MarksPercentage1").innerText = Percentagesubject1;
document.getElementById("MarksPercentage2").innerText = Percentagesubject2;
document.getElementById("MarksPercentage3").innerText = Percentagesubject3;
document.getElementById("Total1").innerText = total1;
document.getElementById("Total2").innerText = total2;
document.getElementById("Total3").innerText = total3;



}