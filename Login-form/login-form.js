function loginClick()
{
    var email = document.getElementById("emailidtextbox").value;
    var inputpassword = document.getElementById("passwordtextbox").value;

    (isLoginSuccess(email,inputpassword))? alert("User Login successfully") : alert("Please enter valid email and password");
    
}
function isLoginSuccess(email,inputpassword)
{
    return (email == "hemalatha@abc.com" && inputpassword == "abcd1234")?  true:  false;
}