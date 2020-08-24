var name="Hari"
var password="hari@123"
function validate()
{
    var nm=document.getElementById("nam").value
    var ps=document.getElementById("pass").value

    if(nm.length==0)
    {
        document.getElementById("msg1").innerHTML="**please enter the name"
        return false
    }
    else if(nm!==name){
        document.getElementById("msg1").innerHTML="**Name is invalid"
        return false
    }
    else {
        document.getElementById("msg1").innerHTML=""
        
    }

    if(ps.length==0)
    {
        document.getElementById("msg2").innerHTML="**Please enter the password"
        return false
    }
    else if(ps!==password)
    {
        document.getElementById("msg2").innerHTML="**Password is invalid"
        return false
    }
    
  
}