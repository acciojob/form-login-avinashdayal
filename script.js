function getFormvalue(event) {
    event.preventDefault(); // stop page reload

    // Get the form
    let form = document.getElementById("myForm");

    // Retrieve values
    let firstName = form.fname.value;
    let lastName = form.lname.value;

    // Display full name
    alert(firstName + " " + lastName);
}