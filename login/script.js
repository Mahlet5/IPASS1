function myFunction()
 {

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username == "admin@gmail.com" && password == "password" )
{
location.replace("../main/index.html");

}

else if(username == "student@gmail.com" && password == "password")
{
    location.replace("");
}
else if(username == "teacher@gmail.com" && password == "password")
{
    location.replace("");

}
}
