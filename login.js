function submitbtn(){
	
	var uname = document.getElementById("uidinput").value;
    var at = uname.indexOf("@");
    var dot = uname.lastIndexOf(".");
	var upwd = document.getElementById("pwdinput").value;

//************************** Email Validation*************************************************************
    if (uname =="" || at<1 || dot<at+2 || dot+2>=uname.length) 
	{
		alert("Not a valid e-mail address");
		document.getElementById("uidinput").style.borderColor="red";
    }
//*****************************PASSWORD VALIDATION********************************************************
    if (upwd.length < 6) {
        alert("Pwd_too_short");
    } else if (upwd.length > 15) {
        alert("Pwd_too_long");
    } else if (upwd.search(/[0-9]/) == -1) {
        alert("Pwd_no_num");
    }else if (upwd.search(/[A-Z]/) == -1) {
        alert("Pwd_no_uppercase");
    }else if (upwd.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) !== -1) {
        alert("Pwd_no_splchar");
    }
}
