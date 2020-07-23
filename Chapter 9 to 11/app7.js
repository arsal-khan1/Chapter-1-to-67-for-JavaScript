function secretNumber (){
var a = +1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;
var h = 8;
var i = 9;
var j = 10;
var x = +prompt("Guess the Number");
if(x==b || x==c || x==d || x==e || x==f || x==g || x==h || x==i|| x==j){
    alert("Bingo! Correct Answer"); 
}
if(x==+1){
    alert("Close enough to the correct answer");
}

}