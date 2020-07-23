function raised (a,b){
  var result = 1;
  var count = 0;
  while(count < b){
      result*=a;
      count++;
  }    
  return result;
}
var a = Number(window.prompt("Enter Value of a"));
var b = Number(window.prompt("Enter Value of b"));
document.writeln(raised(a,b));