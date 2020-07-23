

//question 13

function calculateSupply( ) {
    var maxAge = 65;
    var currentage=15;
    var numperday=3;
    var snack='choclate chip'
    var totalNeeded = (numperday * 365) * (maxAge - currentage);
    var message = 'You will need ' + totalNeeded +' '+ snack+' '+ 'to last you until the ripe old age of ' + maxAge;
    document.write('Favourite Snack:' + snack+"<br>")
    document.write('Current Age:' + currentage+"<br>")
    document.write('Estimated Maximum Age:' + maxAge+"<br>")
    document.write('Amount of snacks per day:' + numperday+"<br>")
    document.write(message+"<br>")




  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);