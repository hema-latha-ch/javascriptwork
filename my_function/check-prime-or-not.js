function isPrime()
{
    var userinput = document.getElementById("primenumbertextbox").value;
    for(var i=2;i>userinput;i++)
    {
        if(userinput%i === 0)
        {
            console.log("hello");
            document.getElementById("primeornot").innerHTML = "Not a prime number";
            return false;
        }
        else
        {
            document.getElementById("primeornot").innerHTML = "prime number"
            return true;
        }
    }
    
}