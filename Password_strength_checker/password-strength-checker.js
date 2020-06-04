function loginClick()
{
    var email = document.getElementById("emailidtextbox").value;
    var inputpassword = document.getElementById("passwordtextbox").value;

    //(isLoginSuccess(email,inputpassword))? alert("User Login successfully") : alert("Please enter valid email and password");
    isPasswordStrengthChecker(inputpassword);
    
}
function isLoginSuccess(email,inputpassword)
{
    email.charCodeAt(0);
    return (email == "hemalatha@abc.com" && inputpassword == "abcd1234")?  true:  false;
}
function resetValues()
{
    document.getElementById("emailidtextbox").value = "";
    document.getElementById("passwordtextbox").value = "";
}
function isPasswordStrengthChecker(mypassword)
{
    let strength = {
      1: 'Very Weak',
      2: 'Weak',
      3: 'Medium',
      4: 'Strong',
      5: 'Very Strong'
    };

    let strengthValue = {
        'caps' : false,
        'length' : false,
        'special' : false,
        'numbers' : false,
        'small' : false
    };
    if(mypassword.length>=8)
    {       
        strengthValue.length = true;
-        console.log("does passoword lemgth is greater than 8"+ strengthValue.length)
    }
    for(let index=0; index<=mypassword.length; index++)
    {
        let char = mypassword.charCodeAt(index);
        if(!strengthValue.caps && char >=65 && char >= 90)
        {
            strengthValue.caps = true;
        }
        else if(!strengthValue.numbers && char >=48 && char <= 57)
        {
            strengthValue.numbers = true;
        }
        else if(!strengthValue.small && char >=97 && char <= 122)
        {
            strengthValue.small = true;
        }
        else if(!strengthValue.special && (char >=33 && char <= 47) || (char >=58 && char <= 64))
        {
            strengthValue.special = true;
        }
        
  }
    console.log("does password contain caps :"+strengthValue.caps);
    console.log("does password contain numbers : "+strengthValue.numbers);
    console.log("does password contain small :"+strengthValue.small);
    console.log("does password contain special :"+strengthValue.special);
}
    
    
    
