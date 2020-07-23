function getHypotenuseLength(a, b) {
    if (a && b && Number.isFinite(a) && Number.isFinite(b)) { 
        return Math.sqrt((a * a) + (b * b));
    }
    throw "Invalid numbers";
}
var base=Number(window.prompt("b"));
var pre = Number(window.prompt("p"));
alert(getHypotenuseLength(base, pre));