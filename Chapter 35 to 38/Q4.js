function calc(a,b,c){
    var a= window.prompt("enter a value")
    var b= window.prompt("enter a value")
    var c= window.prompt("enter operation")

    if(c=="x"){
        document.write(a*b)
    }
    else if(c=="-"){
        document.write(a-b)
    }
    else if(c=="+"){
        document.write(a+b)
    }
    else if(c=="/"){
        document.write(a/b)
    }


}
calc();