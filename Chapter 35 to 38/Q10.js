function check_Palindrome(str_entry){
    
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(cstr==="") {
            document.writeln("Nothing found!","<br/>");
            return false;
        }
     
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    
            if (cstr.length === 1) {
                document.writeln("Entry is a palindrome.","<br/>");
                return true;
            } else {
    
                ccount = (cstr.length - 1) / 2;
            }
        }
    
        for (var x = 0; x < ccount; x++) {
     
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.writeln("Entry is not a palindrome","<br/>");
                return false;
            }
        }
        document.writeln("The entry is a palindrome","<br/>");
        return true;
    }
    var s = window.prompt("Enter Palindrome");
    alert(check_Palindrome(s));
    