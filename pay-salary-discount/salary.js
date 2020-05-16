function netpayAmount()
{
  
    var salary = parseInt(document.getElementById("salarytextbox").value);
    let discount=0;
    if(salary>0)
    {
        if(salary<=8000)
        {
            discount = salary * 0.05;
        }
        else if(salary<=16000)
        {
            discount = salary * 0.15;
        }
        else if(salary<=24000)
        {
            discount = salary * 0.25;
        }
        else{
            discount = salary * 0.50; 
        }
    }
    else{
        alert("please enter valid salary in positives")
    }
    document.getElementById("discounttextbox").value = discount;

    document.getElementById("netpaytextbox").value = salary - discount;

}