buttons = document.querySelectorAll(".dropdownButton");
dropdown = document.querySelectorAll(".dropdown");
scrollPos = buttons[0].getBoundingClientRect().top + window.scrollY - 120;
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
        dropdownStyle.display = "none";
    }
}


function toggleDropdown(buttonNum)
{
    minimiseAllExcept(buttonNum);
    dropdownStyle = dropdown[buttonNum].style;
    dropdownStyle.display = "flex";
    tArray[buttonNum] = t = [1, 0][t = tArray[buttonNum]];
    setTimeout(() => dropdownStyle.height = 800*t + "px", 100);
    if(t==1) window.scroll({top: scrollPos, behavior: 'smooth'});
}