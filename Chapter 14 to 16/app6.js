document.write("<h1>Qualification</h1>");
function p(){
    
var parsed = "";
var myObject = [{
    1. : "SSC",
}, {
    2. : "HSC",
}, {
    3. : "BCS",
},{
    4. : "BS",
},{
    5. : "BCOM",
},{
    6. : "MS",
},{
    7. : "M. Phil.",
},{
    8. : "PhD",
}];
for (i = 0; i< myObject.length; i++) {
    var myobj=  myObject[i];
    for (var property in myobj) {
        parsed += property + ": " + myobj[property] + "\n";          
    }
}                           
$("#display").val(parsed);  
}