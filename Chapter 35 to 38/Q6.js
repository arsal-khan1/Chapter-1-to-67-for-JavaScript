function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
var n = window.prompt("Enter Number") 
answer = factorial(n)
alert("The factorial of " + n + " is " + answer);