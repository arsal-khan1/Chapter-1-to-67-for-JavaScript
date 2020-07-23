
var input =Number(window.prompt("Enter Start"));
var f = Number(window.prompt("Enter End"));

function sum() {
    var FirstNumber = f;
    var SecondNumber = input;

    var result = 0;

    for (var i = FirstNumber; i <= SecondNumber; i++) {
      result += i;  
    }

    alert(result);
}

submit.addEventListener('click', sum);
