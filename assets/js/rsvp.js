

function sendMail(RSVPForm) {
    emailjs.send("gmail", "test", {
        "first_name": RSVPForm.firstName.value,
        "last_name": RSVPForm.lastName.value,
        "from_email": RSVPForm.eMail.value,
        "contact_number": RSVPForm.contactNumber.value,
        "going": RSVPForm.inlineRadioOptions.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
};