
function fifo(){
    var arr1 = ["keyboard","mouse","printer","monitor"];
    document.write("Devices:"+"</br>"+arr1+"</br></br>");
    var temp =arr1.shift();
    var temp2 =arr1.shift();
    var temp3 =arr1.shift();
    var temp4 =arr1.shift();
    
    document.write("Out:"+"</br>" +temp+"</br>"+"Out:"+"</br>"+temp2 +"</br>"+"Out:"+"</br>"+temp3+"</br>"+"Out:"+"</br>"+temp4 +"</br>");
    
    
}