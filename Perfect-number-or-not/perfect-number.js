function isPerfectOrNot()
{
    var i,sum=0;
    var  number = parseInt(document.getElementById("numerictextbox").value);
    for(i=1; i<number; i++)
    {
        if(number%i==0)
        {
            sum = sum+i;
        }
          if(sum == number)
          {
             document.getElementById("demo").innerHTML = "Perfect Number";
          }
            else
            {
                document.getElementById("demo").innerHTML = "Not Perfect Number";
}
          }            
            
    }
