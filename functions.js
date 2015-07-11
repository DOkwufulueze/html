function validateContactForm(){
	var cmpls = document.getElementsByClassName("compulsory");
	var ln=cmpls.length;
	var id="";
	var elm="";
	var val="";
	var str=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var phn=/^\+?([0-9]{4,6})(\s)?([0-9]{3})(\s)?([0-9]{4})$/; 
	var phone=document.getElementById("phone").value;

	if(phone!=""){
		if (!phn.test(phone)){
			alert(":::Please enter a valid phone number.");
			document.getElementById("phone").focus();
			return false;
		}
	}

	for(var i=0;i<ln;i++){
		id=cmpls[i].id;
		elm=document.getElementById(id);
		val=elm.value;
		if(val==""||val=="http://"){
			alert(":::Please fill all compulsory fields.");
			document.getElementById(id).focus();
			return false;
		}
		else if(id=="email"&&val!=""){
			if (!str.test(val)){
				alert(":::Please enter a valid e-mail address.");
				document.getElementById(id).focus();
				return false;
			}
		}
	}
}