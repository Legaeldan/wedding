var going = "Thank you for your response! It's great to hear you are going to be at our wedding! We look forward to it, and hope you enjoy the day!";
var notGoing = "It's a shame you can't go. We will really miss you on this special day. We will hopefully catch up with you before then.";
var maybe = "Maybe? MAYBE?! We haven't time for MAYBE! Get your act together!!";
const modalResponse = document.getElementById("modalBody");

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
            if (RSVPForm.inlineRadioOptions.value == "Going!") {
                modalResponse.innerHTML = going;
                $("#goingResponse").modal();
            }
            else if (RSVPForm.inlineRadioOptions.value == "Not Going")
            {
                modalResponse.innerHTML = notGoing;
                $("#goingResponse").modal();
            } else {
                modalResponse.innerHTML = maybe;
                $("#goingResponse").modal();
            }
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
};

function refreshPage(){
    window.location.reload();
} ;

$("#modalClose").on("click", function() {
    refreshPage();
});