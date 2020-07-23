//i
var targettedNode = document.getElementById('form-content');
console.log(targettedNode.nodeType);
//ii
var element = document.getElementById("lastName");
console.log(element.nodeType);
var element1 = document.getElementById("lastName").childNodes;
console.log(element1)

var elementchild = document.getElementById("lastName").childNodes[0];
console.log(elementchild.nodeType);
//iii

console.log(elementchild.innerText="BankUpdated");
//iv
var firstchild = document.getElementById('main-content').firstChild;
console.log(firstchild)
var lastchild = document.getElementById('main-content').lastChild;
console.log(lastchild)
var nextsiblings = document.getElementById('lastName').nextSibling;
console.log(nextsiblings)
var previoussiblings = document.getElementById('lastName').previousSibling;
console.log(previoussiblings)
//v
var parentnode = document.getElementById('email').parentNode;
console.log(parentnode)
var email = document.getElementById('email');
console.log(email.nodeType)