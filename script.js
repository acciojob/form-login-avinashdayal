function getFormvalue(event) {
    event.preventDefault(); // stops page refresh

    // get form inputs
    let firstName = document.forms["form1"]["fname"].value;
    let lastName = document.forms["form1"]["lname"].value;

    // show full name
    alert( firstName + " " + lastName);
}
