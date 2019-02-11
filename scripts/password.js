function passwordCheck() {
    var mail = document.getElementById("mail").value;

    if (mail.length < 8) {
        alert("För få tecken")
    }
    if (mail.search(/\d/) == -1) {
        alert("Lösenordet måste innehålla minst en siffra!")
    }
    var mail = new RegExp(/\w*[A-Z]\w*[A-Z]w*/g);
    if (enteredID.match(mail)){
        isValidChars = true;
    }

    else {
        isValidChars = false;
        alert("För få versaler")
    }
}