function findGreaterNumber()
{
   var firstTextBox = parseInt(document.getElementById("firstinputtextbox").value);
   var secondTextBox = parseInt(document.getElementById("secondinputtextbox").value);
   var thirdTextBox = parseInt(document.getElementById("thirdinputtextbox").value);
   result = 0;
   
   if(firstTextBox > secondTextBox)
   {
     if(secondTextBox > thirdTextBox)
     {
         result = firstTextBox;
     }
     else
     {
         result = thirdTextBox;
     }
}
     else 
     {
         if(secondTextBox > thirdTextBox)
         {
             result = secondTextBox;
         }
         else
         {
             result = thirdTextBox;
         }
     }
     document.getElementById("displaygreaternotextbox").value = result;
}