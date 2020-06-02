function isReverseString()
{
  
   var myinputstring = document.getElementById("inputtextbox").value;
   var myreversestring="";
   for(var i=myinputstring.length-1;i>=0;--i)
   {
    myreversestring=myreversestring+myinputstring[i];
   }
   console.log(myreversestring);

   document.getElementById("demo").innerHTML=myreversestring;
}