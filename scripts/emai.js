emailjs.init("z3Xn9o1n9rHKeZEXd");
form = document.getElementById("contactForm");
form.addEventListener("submit", sendEmail)
function sendEmail(event)
{
    event.preventDefault();
    emailjs.sendForm("service_afcnll8", "template_grtqs5l", form)
    .then(function(response)
    {
        if(response.status == "200") document.getElementById("messageSubmit").value = "Message Sent";
    });
}