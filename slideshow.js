image = document.getElementById("slideshow");
nextButton = document.getElementById("nextPic");
lastButton = document.getElementById("lastPic");

nextButton.addEventListener("click", NextPicture);
lastButton.addEventListener("click", LastPicture);

let pictureNames = ["pictures/scenery1.jpg", "pictures/scenery2.webp", "pictures/scenery3.jpg", "pictures/scenery4.jpg"]
let imageNum = 0;
let autoNext = true;
let length = pictureNames.length

function NextPicture(){ ManualChange(1); }

function LastPicture(){ ManualChange(-1); }


function ManualChange(amount)
{
    autoNext = false;
    setTimeout(() => autoNext = true, 10000);
    ChangePic(amount);
}

function AutoNext()
{
    if(autoNext)
    {
        ChangePic(1);
    }
}

function ChangePic(amount)
{
    imageNum += amount;
    imageNum = (imageNum%length + length)%length;
    image.src = pictureNames[imageNum];
}

setInterval(AutoNext, 5000); 