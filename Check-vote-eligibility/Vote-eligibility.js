// window.addEventListener("load",start,false);
// function start()
// {
//     document.getElementById("checkvoteeligibility").addEventListener("click",checkeligibility,false);
// }
   // document.getElementById("checkvoteeligibility").addEventListener('click', checkeligibility, false);
    function checkeligibility()
    {
        var age = parseInt(document.getElementById("agetextbox").value);
        var status = (age>18) ? "Eligibile":"NotEligibile";
        document.getElementB
        yId("demo").innerHTML = status;
}