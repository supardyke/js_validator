document.getElementById('uname').addEventListener("keyup", function() {
	var username = document.forms["Form"]["uName"].value;
	var err = document.getElementById('err');

	if (username.length < 8) {
		this.style.borderColor = "red";
		err.innerHTML = "Username should be at least 8 characters"
	} else {
		this.style.borderColor = "green";
		err.innerHTML = " "
	}
});

document.getElementById('pword').addEventListener("keyup", function() {
	var password = document.forms["Form"]["password"].value;

	if (password.length < 5) {
		this.style.borderColor = "red";
		err.innerHTML = "Password should be at least 5 characters"
	} else {
		this.style.borderColor = "green";
		err.innerHTML = " "
	}
});

document.getElementById('cpword').addEventListener("keyup", function() {
	var password = document.forms["Form"]["password"].value;
	var cPassword = document.forms["Form"]["confirmPassword"].value;

	if (cPassword != password || cPassword.length == 0) {
		this.style.borderColor = "red";
		err.innerHTML = "Passwords do no match"
	} else {
		this.style.borderColor = "green";
		err.innerHTML = " "
	}
});
document.getElementById('email').addEventListener('keyup', function() {
	var email = document.forms["Form"]["email"].value;
	if (email && /(^\w.*@\w+\.\w)/.test(email)) {
		err.innerHTML = " "
		this.style.borderColor = "green";
	} else {
		err.innerHTML = "Enter valid mail "
		this.style.borderColor = "red";
	}
});