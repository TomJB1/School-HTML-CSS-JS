document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contactButton").addEventListener("click", toggleDropdown);
    contactDiv = document.getElementById("contact");
});

let t = 0;
//0 up, 1 down

function toggleDropdown()
{
    t = [1, 0][t];
    contactDiv.style.height = 200*t + "px";
}