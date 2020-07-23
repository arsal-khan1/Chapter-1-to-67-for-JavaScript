var working_hour= Number(prompt("Enter the working hours of employee number:"));
function employees(){
    var count = 1;
    
    var over_time;
    var over_time_pay;

    while(count<=1){
        if(working_hour>40){
            over_time = working_hour-40;
            over_time_pay=over_time*12.00;
            document.writeln("Employee Number"+" "+count+" "+"overtime is"+" "+over_time_pay+"</br>");
        }else{
            document.writeln("You have to work for more than 40 hours to get over time pay"+"</br>");
        }
        count++;
    }
}
employees();