var firstname=window.prompt("enter first name: ");
var lastname=window.prompt("enter last name: ");

var b = firstname.slice(0,1);
var c=firstname.slice(1)
var d = lastname.slice(0);



b =b.toUpperCase();
c=c.toLowerCase();

d=d.toLowerCase();
var e=b.concat(c,d);
document.write(e);

