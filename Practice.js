let div = document.querySelector("div");
let button = document.createElement("button");
let body = document.querySelector("body");

body.style.backgroundColor = "aqua";

div.style.height = "100px";
div.style.width = "100px";
div.style.backgroundColor = "pink";

div.setAttribute("class","container");

button.innerText = "Clickme";

div.classList.add("div-container");

body.append(button);

console.log(div.getAttribute("class"));

button.remove();