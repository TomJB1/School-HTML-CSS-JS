image = document.getElementById("slideshow");
nextButton = document.getElementById("nextPic");
lastButton = document.getElementById("lastPic");

nextButton.addEventListener("click", NextPicture);
lastButton.addEventListener("click", LastPicture);

let pictureNames = ["mySite.png", "ecosia.webp", "google.webp"]

let imageNum = 0;

function NextPicture()
{
    ChangePic(1);
}

function LastPicture()
{
    ChangePic(-1);
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