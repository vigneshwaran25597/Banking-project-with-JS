function validate()
{
    var firstn=document.getElementById("fn").value
    var lastn=document.getElementById("ln").value
    var dobb=document.getElementById("dob").value
    var phonen=document.getElementById("pn").value
    var Adhaarn=document.getElementById("an").value
    var pd=document.getElementById("pass").value
    var cpd=document.getElementById("cpass").value
    var wecp=document.getElementById("wecap").value
    

    if(firstn.length==0 )
     {  document.getElementById("msg1").innerHTML="**Please enter the Firstname"
        return false 
     }
    else if(firstn.length<3)
    {
      document.getElementById("msg1").innerHTML="**Firstname should have min 3 letters"
       return false
      }
    else if(firstn.length>15)
    { 
        document.getElementById("msg1").innerHTML="**Firstname should have max 15 letters"
       return false
      }
      else if(isNaN(firstn)==false)
      {
         document.getElementById("msg1").innerHTML="**Firstname should have only alphabets"
         return false
      }
      else{
         document.getElementById("msg1").innerHTML=""
      }
   
    
      if(lastn.length==0 )
    {  document.getElementById("msg2").innerHTML="**Please enter the lastname"
        return false }
    else if(lastn.length<3)
    {  document.getElementById("msg2").innerHTML="**Lastname should have min 3 letters"
       return false}
    else if(lastn.length>15)
    {  document.getElementById("msg2").innerHTML="**Lastname should have max 15 letters"
       return false}
    else if(isNaN(firstn)==false)
     {
       document.getElementById("msg2").innerHTML="**Firstname should have only alphabets"
       return false
      }
    else{
      document.getElementById("msg2").innerHTML=""
    }
   

    
   if(dobb.length==0 )
   {  document.getElementById("msg3").innerHTML="**Please enter the date"
       return false } 
   else{ 
        document.getElementById("msg3").innerHTML=""
      }
        
  
     if(phonen.length==0)
    {  document.getElementById("msg4").innerHTML="**Please enter the mobilenumber"
       return false} 
    else if(phonen.length<10)
    {  document.getElementById("msg4").innerHTML="**Mobile number should not be less than 10 numbers"
        return false}   
    else if(phonen.length>10)
    {  document.getElementById("msg4").innerHTML="**Mobile number should not be more than 10 numbers"
        return false}  
    else if(phonen.charAt(0)<6)
    {  document.getElementById("msg4").innerHTML="**Mobile number should start with  6 (or) 7 (or) 8 (or) 9 "
        return false} 
    else{ 
         document.getElementById("msg4").innerHTML=""
       }
      
       if(Adhaarn.length==0)
    {  document.getElementById("msg5").innerHTML="**Please enter the Adhaar number textbox"
       return false} 
    else if(Adhaarn.length<12)
    {  document.getElementById("msg5").innerHTML="**Adhaar number should not be less than 12 numbers"
        return false}   
    else if(Adhaarn.length>12)
    {  document.getElementById("msg5").innerHTML="**Adhaar number should not be more than 12 numbers"
        return false}  
    else{ 
         document.getElementById("msg5").innerHTML=""
       }
      
   
     if(pd.length==0)
       {  document.getElementById("msg6").innerHTML="**Please enter the Password"
          return false} 
    else if(pd.length<6)
       {  document.getElementById("msg6").innerHTML="**Password should have min 6 letters"
          return false}       
    else if(pd.length>11)
       {  document.getElementById("msg6").innerHTML="**Password should have max 11 letters"
           return false} 
    else{ 
          document.getElementById("msg6").innerHTML=""
          }    
    
     if(cpd.length==0)
       {  document.getElementById("msg7").innerHTML="**Please enter the Confirm password"
           return false}  
    else if(cpd!==pd)
       {  document.getElementById("msg7").innerHTML="**Password and confirm password is not matching"
           return false}
     else{ 
           document.getElementById("msg7").innerHTML=""
            }    

     
     if(document.getElementById("cap").value==0)
        {  document.getElementById("msg8").innerHTML="**Please click the CREATE CAPTCHA option "
           return false}
      else{ 
            document.getElementById("msg8").innerHTML=""
             }  

     if(wecp.length==0)
       {  document.getElementById("msg9").innerHTML="**Please enter the Captcha textbox"
           return false} 
    else if(wecp!==document.getElementById("cap").value)
       {  document.getElementById("msg9").innerHTML="**Captcha you entered is not matching with the generated one"
           return false}
    else{ 
            document.getElementById("msg9").innerHTML=""
             } 
             
         var n1=document.getElementById("g1").checked
         var n2=document.getElementById("g2").checked
         var n3=document.getElementById("g3").checked
          if(n1==false && n2==false && n3==false)
          {
            document.getElementById("msg10").innerHTML="**Please select the gender"
            return false
          }
          
   }


function dis()
{
   var o="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   var x=o[Math.floor(Math.random()*o.length)]

  for(var i=0;i<=4;i++)
 {
    x=x+o[Math.floor(Math.random()*o.length)]
    
 }
  f1.c1.value=x
 }