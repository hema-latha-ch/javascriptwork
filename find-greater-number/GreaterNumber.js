window.addEventListener("load",start,false);
//outout=20;
function start()
{
    document.getElementById("submitbutton").addEventListener("click",greater,false);
}
function greater()
{
    var firstnumber = parseInt(document.getElementById("firstinputnumber").value);
    console.log(firstnumber)
    var secondnumber = parseInt(document.getElementById("secondinputnumber").value);
    console.log(secondnumber)
    var outputresult=0; 
    if(firstnumber>secondnumber)
    {
       // firstnumber = outputresult;
        outputresult=firstnumber;
        console.log(" if output result " + outputresult)
    }
    else 
    {
        //secondnumber = outputresult;
        outputresult=secondnumber;
        console.log(" else output result " + outputresult)
    }
    document.getElementById("thirdoutputnumber").value = outputresult;
}