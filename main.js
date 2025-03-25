// function AGEVerify() {
// 	let age=document.getElementById('realage').value;

// 	if (age >= 18) {
// 		window.alert('Verified! Please proceed to the next step');
// 	}
// }

function AGEVerify() {
	let age=document.getElementById('realage').value;

	if (age >= 18) {
		window.alert('Verified! Please proceed to the next step');
	}
	else {
		window.alert('Woops! You cannot vote yet!');
	}

}

