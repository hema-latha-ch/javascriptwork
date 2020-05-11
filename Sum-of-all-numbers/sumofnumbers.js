window.addEventListener("load", initializeButtons, false);
function initializeButtons()
{
    document.getElementById("addButton").addEventListener("click",addition,false);
    document.getElementById("subButton").addEventListener("click", subtraction,false);
    document.getElementById("mulButton").addEventListener("click",multiplication,false);
    document.getElementById("divButton").addEventListener("click",division,false);
}

function addition()
{
  var firstNumber = parseInt(document.getElementById("firstnumberTextbox").value);//parse to integer, parseInt is a method, which will take the string as an input and convert them to integer.
  var secondNumber = parseInt(document.getElementById("secondnumberTextbox").value);
  var sum = firstNumber + secondNumber;
  document.getElementById("resultTextboxid").value = sum.toString();
}

function subtraction()
{
  var firstNumber = parseInt(document.getElementById("firstnumberTextbox").value);//parse to integer, parseInt is a method, which will take the string as an input and convert them to integer.
  var secondNumber = parseInt(document.getElementById("secondnumberTextbox").value);
  var sum = firstNumber - secondNumber;
  document.getElementById("resultTextboxid").value = sum.toString();

}
function multiplication()
{
    var firstNumber = parseInt(document.getElementById("firstnumberTextbox").value);//parse to integer, parseInt is a method, which will take the string as an input and convert them to integer.
    var secondNumber = parseInt(document.getElementById("secondnumberTextbox").value);
    var sum = firstNumber * secondNumber;
    document.getElementById("resultTextboxid").value = sum.toString(); 
}
function division()
{
    var firstNumber = parseInt(document.getElementById("firstnumberTextbox").value);//parse to integer, parseInt is a method, which will take the string as an input and convert them to integer.
  var secondNumber = parseInt(document.getElementById("secondnumberTextbox").value);
  var sum = firstNumber / secondNumber;
  document.getElementById("resultTextboxid").value = sum.toString();
}