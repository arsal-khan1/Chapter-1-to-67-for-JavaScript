var dayNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 var now = new Date();
 var theDay = now.getMonth();
 var nameOfToday = dayNames[theDay];
 document.write("current month :" +nameOfToday);