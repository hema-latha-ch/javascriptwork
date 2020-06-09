function isValidation()
{
    
    var firstname = document.registration.firstname;
     console.log(firstname);                           
    var lastname = document.registration.lastname;
    var email = document.registration.email;
    var gender = document.registration.gender;
    var mobile = document.registration.mobile;
    if(isValidatefirstname(firstname))
    {
        if(isValidatelastname(lastname))
        {
            if(isValidateemailid(email))
            {
                if(isValidategender(gender))
                {
                    if(isValidatemobile(mobile))
                    {

                    }
                }
            }
        }

    }
    else return false;
}

function isValidatefirstname(firstname)
{   
   
    var letters = /^[A-Za-z]+$/;
    if(firstname.value.length == 0)
    {
        alert("Please enter first name");
        firstname.focus();
        return false;
    }
   else if(firstname.match(letters))
    {
        return true;
    }
    else
    {
        alert("Please enter only alphabets");
        firstname.focus();
        return false;
    }
}

function isValidatelastname(lastname)
{
    console.log("hema");
    var letters = /^[A-Za-z]+$/;
    if(lastname.value.length == 0)
    {
        alert("Please enter last name");
        lastname.focus();
        return false;
    }
   else if(lastname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Please enter only alphabets");
        lastname.focus();
        return false;
    }
}

function isValidateemailid(email)
{
    var emailletter = /^[A-Za-z0-9@.]+$/;
    if(email.value.length == 0)
    {
        alert("Please enter email-id");
        email.focus();
        return false;
    }
   else if(email.value.match(emailletter))
    {
        return true;
    }
    else
    {
        alert("Please enter valid email-id");
        email.focus();
        return false;
    }
}

function isValidategender(gender)
{
   if(gender.value == "default")
   {
       alert("Select your gender");
       gender.focus();
       return false;
   }
   else
   {
       return true;
   }
}

function isValidatemobile(mobile)
{
    var numbers = /^[0-9]+$/;
    if(mobile.value.length == 0)
    {
        alert("Please enter mobile number");
        mobile.focus();
        return false;
    }
    else if(mobile.value.length<10)
    {
        alert("please enter a valid mobile number");
        mobile.focus();
        return false;
    }
   else if(email.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert("Please enter only numbers");
        email.focus();
        return false;
    }
    document.getElementById("successmessage").innerHTML = "Registration completed successfully";
}
