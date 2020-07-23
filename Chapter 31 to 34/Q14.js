
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
var unit= 410
var p=16
var n = unit*p;
var l=350;
var late=n+l;
document.write("Customer Name: ABC customer"+"<br>"+"Month: "+nameOfToday+"<br>"+"No. of Units: "
+unit+"<br>"+"No. of charges per unit: "+p+"<br>"+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+n
+"<br>"+"Late Payment Surcharge: "+l+"<br>"+"Gross Amount Payable (after Due Date): "+ late);