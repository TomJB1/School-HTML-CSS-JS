emailjs.init("z3Xn9o1n9rHKeZEXd");

form = document.getElementById("contactForm");

form.addEventListener("submit", sendEmail)

function sendEmail(event)
{
    event.preventDefault();
    emailjs.sendForm("default_service", "template_grtqs5l", form);
}