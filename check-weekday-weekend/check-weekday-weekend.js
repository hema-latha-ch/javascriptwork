function isweekdayorweekend()
{
    var userinput = document.getElementById("inputtextbox").value;
    var result=userinput.toLowerCase();
    switch(result)
    {
        case "sunday" : 
           var text = 'weekend';
            break;
        case "monday" :
          var  text = 'weekday';
            break;
        case "tuesday" :
          var  text = 'weekday';
            break;
        case "wednesday" :
          var  text = 'weekday';
            break;
        case "thrusday" :
           var text = 'weekday';
            break;
        case "friday":
           var text = 'weekend';
            break;
        case "saturday" :
           var text = 'weekend';
            break;
    }
    document.getElementById("demo").innerHTML = text;
}