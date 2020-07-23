var arr1 = ["Red","Green","Blue"];
document.write(arr1);
function b(){
    arr1.unshift(prompt("Enter Color"));
    document.write(arr1);
}

function e(){
    arr1.push(prompt("Enter Color"));
    document.write(arr1);
}

function tb(){
    arr1.unshift(prompt("Enter Color 1"));
    arr1.unshift(prompt("Enter Color 2"))
    document.write(arr1);
}

function db(){
    arr1.splice(0,1,prompt("Enter Color"));
    document.write(arr1);
}

function de(){
    arr1.splice(2,1,prompt("Enter Color"));
    document.write(arr1);
}

function a(){
    var c = +prompt("Enter what index want youu want to change")
    arr1.splice(c,1,prompt("Enter Color"));
    document.write(arr1);
}

function ab(){
    var c = +prompt("Enter index number");
    var d = +prompt("Enter how many color are delete");
    arr1.splice(c,d);
    document.write(arr1);
}