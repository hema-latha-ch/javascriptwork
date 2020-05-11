window.addEventListener("load", initializeButtons, false);
function initializeButtons()
{
    document.getElementById("sumbutton").addEventListener("click",addition,false);
}

function addition()
{
  var firstNumber = parseInt(document.getElementById("firstnumber").value);//parse to integer, parseInt is a method, which will take the string as an input and convert them to integer.
  var secondNumber = parseInt(document.getElementById("secondnumber").value);
  var sum = firstNumber + secondNumber;
  document.getElementById("sumnumber").value = sum.toString();
}

