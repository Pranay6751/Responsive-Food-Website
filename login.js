function validate()
{
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    // document.getElementById("hello").innerHTML="kjajk";
    if(user=="admin" && pass=="admin123")
    {
        alert("Login succesful");
        // return true;
    }
    else
    {
        alert("Login failed || incorrect password");
        // return false;
    }
}