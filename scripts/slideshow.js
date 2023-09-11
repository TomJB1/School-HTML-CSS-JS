image = document.getElementById("slideshow");
document.getElementById("nextPic").addEventListener("click", () => ManualChange(1));
document.getElementById("lastPic").addEventListener("click", () => ManualChange(-1));
let pictureNames = ["pictures/scenery1.jpg", "pictures/scenery2.webp", "pictures/scenery3.jpg", "pictures/scenery4.jpg"]
let imageNum = 0;
let autoNext = true;
let length = pictureNames.length;

function ManualChange(amount)
{
    autoNext = false;
    setTimeout(() => autoNext = true, 10000);
    ChangePic(amount);
}

function AutoNext()
{
    if(autoNext) ChangePic(1);
}

function ChangePic(amount)
{
    image.style.opacity = "0";
    setTimeout(() => image.style.opacity = "1", 500);
    setTimeout(() => 
    {
        imageNum += amount;
        imageNum = (imageNum%length + length)%length;
        image.src = pictureNames[imageNum];
    }, 400);
    
    
}

setInterval(AutoNext, 5000); 