
// //question 5

function fivemultFunction() {
    var i = 1;
    var result = '';
    for (i = 1 ; i < 11 ; i++) {
        var c = parseInt(5) * parseInt(i);
        result += 5 + " x " + i + " = " + c + '</br>';
    }
    document.getElementById("multiply").innerHTML = result;

}
function multFunction() {

var a = document.getElementById("quest").value;

                var result = '';
                for (i = 1 ; i < 11 ; i++) {
                    var c = parseInt(a) * parseInt(i);
                    result += a + " x " + i + " = " + c + '</br>';
                }
                document.getElementById("multiply").innerHTML = result;
        
      
  }
