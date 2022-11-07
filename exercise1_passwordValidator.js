function validation()
{
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");

    if (pass1.value.length < 8 || pass2.value.length < 8)
    {
        alert("Entered Password is less than 8 characters.");
    }
    else if (pass1.value != pass2.value)
    {
        alert("Passwords do not match.");
    }
    else
    {
        alert("Passwords match.");
    }
    
    pass1.value = "";
    pass2.value = "";
}