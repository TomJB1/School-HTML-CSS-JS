star = document.querySelector("*").style;
let t = 0
//0 light, 1 dark
document.getElementById("body").addEventListener("dblclick", (event) => {
    t = [1, 0][t];
    star.color = ["black", "white"][t];
    star.backgroundColor = ["white", "black"][t];
})