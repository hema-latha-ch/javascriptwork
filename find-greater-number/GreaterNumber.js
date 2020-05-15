function greater()
{
    var firstnumber = parseInt(document.getElementById("firstinputnumber").value);
    var secondnumber = parseInt(document.getElementById("secondinputnumber").value);
    var outputresult=0; 
    if(firstnumber>secondnumber)
    {
       // firstnumber = outputresult;
        outputresult=firstnumber;
    }
    else 
    {
        //secondnumber = outputresult;
        outputresult=secondnumber;
    }
    document.getElementById("thirdoutputnumber").value = outputresult;
}