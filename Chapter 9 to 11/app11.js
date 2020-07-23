function calculator()
{
    var first = parseFloat(document.getElementById('first').value);
    var second = parseFloat(document.getElementById('second').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('result').value = first+second;
    }
    
    if(oper === '-')
    {
        document.getElementById('result').value = first-second;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = first/second;
    }
    
    if(oper === 'X')
    {
        document.getElementById('result').value = first*second;
    }
    if(oper === '%')
    {
        document.getElementById('result').value = first%second;
    }
}