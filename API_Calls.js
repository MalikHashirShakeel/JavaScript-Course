const URL = "https://cat-fact.herokuapp.com/facts";
let button = document.querySelector("#fact-button");
let factPara = document.createElement("p");

const getData = async () => {
    let response = await fetch(URL);
    let data = await response.json();

    factPara.innerText = data[1].text;
    button.after(factPara);
}

// function getData(){
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((response) => {
//         factPara.innerText = response[0].text;
//         button.after(factPara);
//     })
// }

button.addEventListener("click" ,getData);