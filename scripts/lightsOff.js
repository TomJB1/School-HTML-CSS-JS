star = document.querySelector("*");
let t = 0
//0 light, 1 dark
document.getElementById("body").addEventListener("dblclick", (event) => {
    textC = ["white", "black"][t];
    bgC = ["black", "white"][t];
    star.style.color = textC;
    star.style.backgroundColor = bgC;
    t = [1, 0][t];
})