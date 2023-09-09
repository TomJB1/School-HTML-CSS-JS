image = document.getElementById("slideshow");
nextButton = document.getElementById("nextPic");
lastButton = document.getElementById("lastPic");

nextButton.addEventListener("click", NextPicture);
lastButton.addEventListener("click", LastPicture);

let pictureNames = ["pictures/scenery1.jpg", "pictures/scenery2.webp", "pictures/scenery3.jpg", "pictures/scenery4.jpg"]
let imageNum = 0;
let autoNext = true;

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
    if(imageNum > pictureNames.length -1)
    {
        imageNum = 0;
    }
    else if(imageNum < 0)
    {
        imageNum = pictureNames.length -1;
    }
    image.src = pictureNames[imageNum];
}

setInterval(AutoNext, 5000); 