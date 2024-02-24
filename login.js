var email = document.forms['form']['email']; // Fix: 'docuument' to 'document'
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

// Use 'input' event instead of 'textInput'
email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    function validated(){
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "none";
        password.focus();
        return false;
    }
}

    // If both email and password meet the criteria, return true
    return true;
}

function email_Verify() {
    if (email.value.length >= 25) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function password_Verify() {
    if (password.value.length >= 10) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}


