
function validateform(form)
{
	
	if(form.name.value == '')
	{
		alert("please enter the name");
		form.name.focus();
		return false;
	}
	if (form.name.value.length < 3)
{
alert("Please enter at least 3 characters in the \"Name\" field.");
form.name.focus();
return false;
}
var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
var checkStr = form.name.value;
var allValid = true;
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkOK.length;  j++)
if (ch == checkOK.charAt(j))
break;
if (j == checkOK.length)
{
allValid = false;
break;
}
}
if (!allValid)
{
alert("Please enter only letter  in the \"NAME\" field.");
form.name.focus();
return (false);
}

if (form.email.value == "")
{
alert("Please enter a value for the \"Email\" field.");
form.email.focus();
return (false);
}
var checkEmail = "@.";
var checkStr = form.email.value;
var EmailValid = false;
var EmailAt = false;
var EmailPeriod = false;
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkEmail.length;  j++)
{
if (ch == checkEmail.charAt(j) && ch == "@")
EmailAt = true;
if (ch == checkEmail.charAt(j) && ch == ".")
EmailPeriod = true;
	  if (EmailAt && EmailPeriod)
		break;
	  if (j == checkEmail.length)
		break;
	}
	// if both the @ and . were in the string
if (EmailAt && EmailPeriod)
{
		EmailValid = true
		break;
	}
}
if (!EmailValid)
{
alert("The \"email\" field must contain an \"@\" and a \".\".");
form.email.focus();
return (false);
}
if (form.phone.value == "")
{
alert("Please enter a value for the \"numbers\" field.");
form.phone.focus();
return (false);
}


if (form.phone.value.length < 10)
{
alert("Please enter a valid number");
form.phone.focus();
return (false);
}
var checkOK = "0123456789";
var checkStr = form.phone.value;
var allValid = true;
var allNum = "";
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkOK.length;  j++)
if (ch == checkOK.charAt(j))
break;
if (j == checkOK.length)
{
allValid = false;
break;
}
if (ch != ",")
allNum += ch;
}
if (!allValid)
{
alert("Please enter only digit characters in the \"numbers\" field.");
form.phone.focus();
return (false);
}

if(form.message.value == '')
	{
		alert("please enter the message");
		form.message.focus();
		return false;
	}

	}
	