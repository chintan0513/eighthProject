function ValidateEmail(email) 
{
    var msg = document.getElementById("emsg");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myform.email.value))
  {
    alert("Success.");
    return (true);
  }
    msg.innerHTML = "You have entered an invalid email address!";
    return(false);
}