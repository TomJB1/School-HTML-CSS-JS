buttons = document.querySelectorAll(".dropdownButton");
dropdown = document.querySelectorAll(".dropdown");
scrollPos = buttons[0].getBoundingClientRect().top + window.scrollY - 70;
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", () => toggleDropdown(i));
}
contactDiv = document.getElementById("contact");
let tArray = Array(buttons.length).fill(0);
//0 up, 1 down

function minimiseAllExcept(num)
{
    for (let i = 0; i < buttons.length; i++) {
        if(i == num) continue;
        tArray[i] = 0;
        dropdownStyle = dropdown[i].style;
        dropdownStyle.height = "0px";
        setTimeout(() => dropdownStyle.display = "none", 1);
    }
}


function toggleDropdown(buttonNum)
{
    minimiseAllExcept(buttonNum);
    buttonStyle = dropdown[buttonNum].style;
    buttonStyle.display = "flex";
    tArray[buttonNum] = t = [1, 0][t = tArray[buttonNum]];
    setTimeout(() => buttonStyle.height = 800*t + "px", 1);
    if(t==1) window.scroll({top: scrollPos, behavior: 'smooth'});
}