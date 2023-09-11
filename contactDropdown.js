buttons = document.querySelectorAll(".dropdownButton");
dropdown = document.querySelectorAll(".dropdown");
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", () => toggleDropdown(i));
}
contactDiv = document.getElementById("contact");
let tArray = Array(buttons.length).fill(0);
//0 up, 1 down

function minimiseAll()
{
    tArray.fill(0);
    for (let i = 0; i < buttons.length; i++) {
        dropdown[i].style.height = "0px";
    }
}


function toggleDropdown(buttonNum)
{
    minimiseAll();
    t = tArray[buttonNum];
    t = [1, 0][t];
    tArray[buttonNum] = t;
    dropdown[buttonNum].style.height = 200*t + "px";
}