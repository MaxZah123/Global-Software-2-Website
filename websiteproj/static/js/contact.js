function validate() {
	//alert("This is the validate function");
	
	//Check that the firstname field is not blank
	if(document.regForm.name.value == "") {
		alert("Firstname can't be blank!!");
		return false;
	}
		
	//Check that the surname field is not blank
	if(document.regForm.surname.value == "") {
		alert("Surname can't be blank!!");
		return false;
	}
	
	if(document.regForm.email.value == "") {
		alert("Email can't be blank!!");
		return false;
	}
	
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());