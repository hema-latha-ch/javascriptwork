window.addEventListener("load", start, false);
function start()
{
    document.getElementById("btnsubmit").addEventListener("click", randomnumber, false); 
}
function randomnumber()
{
  var result = ((Math.random() * 100) + 1); 
  document.getElementById("demo").innerHTML = result;
}

