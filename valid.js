//addpermission form validation. this is not working properly
//variable declaration 
const form = document.getElementById('form');
const vehicleNo = document.getElementById('vehicleNo');
const companyName = document.getElementById('companyName');
const driName = document.getElementById('driName');
const route = document.getElementById('route');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// removing whitespaces
	
	const vehicleNo = vehicleNo.value.trim();
	const companyName = companyName.value.trim();
	const driName = driName.value.trim();
	const route = route.value.trim();
	

	
	vehicleNoRegex = /^([a-zA-Z0-9]{2,20})([0-9]{9})$/;
	companyNameRegex =/^([a-zA-Z0-9]{2,20})$/;
	driNameRegex = /^([a-zA-Z0-9]{2,20})$/;
	
	
	
	if(vehicleNo === '') {
		setErrorFor(vehicleNo, 'Cannot be blank !');
	} else if (!vehicleNoRegex.test(vehicleNo)) {
		setErrorFor(vehicleNo, 'Invalid vahicle number !');
	} else {
		setSuccessFor(vehicleNo);
	}

	if(companyName === '') {
		setErrorFor(companyName, 'Cannot be blank !');
	} else if (!companyNameRegex.test(companyName)) {
		setErrorFor(companyName, 'Not a valid name');
	} else {
		setSuccessFor(companyName);
	}

    if(driName === '') {
		setErrorFor(driName, 'Cannot be blank !');
	} else if (!driNameRegex.test(driName)) {
		setErrorFor(driName, 'Not a valid name');
	} else {
		setSuccessFor(driName);
	}


	
	

	if( route === '') {
		setErrorFor(route , 'Cannot be blank !');
	} else {
		setSuccessFor(route );
	}

	

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}