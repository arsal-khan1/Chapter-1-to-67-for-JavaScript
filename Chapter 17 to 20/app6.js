function search()
{  
  var found = false; //  The flag
  var input = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
   var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
      for (var i=0; !found &&i<A.length; i++){
        found = input==A[i]; //  Set the flag if it was found

      }
      if (found) {
        document.write(input+' '+'<b>'+'is available'+'</b>'+' '+'at index'+' '+i+' '+'in our bakery')    
        } 
        
        else {
          document.write('We are soory.'+' '+input+' '+'<b>'+'is not available'+'</b>'+' '+'in our bakery')    
          }
  }




