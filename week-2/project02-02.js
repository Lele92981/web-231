function verifyForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    //

    if (name === "" && email === "" && phone === "" ) {
        alert("Please fill out all fields");
        return false;
    } else {
      alert("Thank you");
        return true;
    }
}

