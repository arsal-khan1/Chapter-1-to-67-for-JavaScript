var now = new Date();
 var theDay = now.getDate();
 if (theDay<=15 ){
 document.write("first 15 days")
 }
 else if( theDay>15){
    document.write("last 15 days")
 }