// let paras = document.querySelectorAll(".para")
// console.dir(paras)

// let div = document.querySelector("#container-1");
// console.log(div.children);
// console.log(div.firstChild);
// console.log(div.lastChild);
// // let paragraph = div.children[0];
// // paragraph.innerText = "I am learning javascript 2.0";
// console.log(div.childNodes);

// let heading = document.querySelector("#heading-1");
// heading.innerText = "Malik Hashir";
// heading.innerHTML = "<i>Malik Hashir</i>";

// let div = document.querySelector("div");
// let div_id = div.getAttribute("id");
// div.setAttribute("id","container");
// let new_id = div.getAttribute("id");
// console.log(div_id);
// console.log(new_id);

// let el = document.createElement("button");
// el.innerText = "Click Me";
// el.style.backgroundColor = "aqua";
// el.style.color = "black";
// div.append(el)
// div.prepend(el)
// document.body.prepend(el)
// div.before(el)
// el.remove()

// let button = document.createElement("button");
// button.innerText = "Click Me";
// button.style.backgroundColor = "red";
// document.body.prepend(button);

// let para = document.createElement("p");
// para.innerHTML = "<i>This is a paragraph.</i>";
// para.setAttribute("class","paragraph.");
// para.style.color = "blue";
// document.body.append(para);
// para.classList.add("newClass");
// console.log(para.classList);


// let button1 = document.querySelector("#btn-1");
// let div1 = document.querySelector("#div-1");
// let body = document.querySelector("body");
// console.log(button1);

// div1.addEventListener("mouseover", (evt) => {
//     console.log("Hover on div detected");
//     console.log("X-coordinate : ",evt.clientX);
//     console.log("Y-coordinate : ",evt.clientY);
// });

// btn1 = button1.addEventListener("click", () => {
//     console.log("Button was clicked");
// });

// const aesyhi =  () => {
//     console.log("Button was clicked");
// };

// btn2 = button1.addEventListener("click",aesyhi)

// btn3 = button1.addEventListener("click", () => {
//     console.log("Good Morning");
// });

// btn4 = button1.addEventListener("click", () => {
//     console.log("Goodbye");
// });

// button1.removeEventListener("click",aesyhi);

// let btn = document.querySelector("#mode-button-1");
// let body = document.querySelector("body");
// let mode = btn.innerText;

// btn.addEventListener("click", () => {
//     if(mode === "Dark Mode"){
//         body.style.backgroundColor = "black";
//         mode = "Light Mode";
//         btn.innerText = "Light Mode";
//     }else {
//         body.style.backgroundColor = "white";
//         mode = "Dark Mode";
//         btn.innerText = "Dark Mode";
//     }
// })

let heading = document.querySelector("h1");

heading.innerText = "Hello Javascript by malik Hashir."