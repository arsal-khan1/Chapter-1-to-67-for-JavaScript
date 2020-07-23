
var b= window.prompt("enter password")
var c= b.slice(0,1);


if(c === "1"||c === "2"||c === "3"||c === "4"||c === "5"||c === "6"||c === "7"||c === "8"||c === "9"||c === "0" ){
    document.write("wrong, start with numbers")
}

else if(b.length<6 || b.length>6){
    document.write("pswd should be 6 legnth")
}

else{
    document.write("success")
}
