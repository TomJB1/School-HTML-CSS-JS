buttons = document.querySelectorAll(".dropdownButton");
dropdown = document.querySelectorAll(".dropdown");
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
        dropdown[i].style.height = "0px";
        setTimeout(() => dropdown[i].style.display = "none", 1);
    }
}


function toggleDropdown(buttonNum)
{
    minimiseAllExcept(buttonNum);
    dropdown[buttonNum].style.display = "block";
    t = tArray[buttonNum];
    t = [1, 0][t];
    tArray[buttonNum] = t;
    setTimeout(() => dropdown[buttonNum].style.height = 500*t + "px", 1);
    if(t==1) window.scroll({top: buttons[0].getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth'});
    
}