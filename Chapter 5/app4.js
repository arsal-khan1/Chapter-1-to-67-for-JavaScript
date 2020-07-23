
//question 5

function multFunction() {
    var a = document.getElementById("quest").value;
    var i = 1;
    var result = '';
    for (i = 1 ; i < 11 ; i++) {
        var c = parseInt(a) * parseInt(i);
        result += a + " x " + i + " = " + c + '</br>';
    }
    document.getElementById("multiply").innerHTML = result;
}
