// let testDiv = document.getElementById("test-div");
// let divGroup = document.getElementsByClassName("group");
//
// testDiv.textContent = "Привет я тебя взломал"

// console.log(divGroup)

let list = document.getElementById("list")

let button = document.getElementById("btn")

function modifyText() {
    button.textContent = "На меня нажали, ура!";
}
button.addEventListener("btn", modifyText )
list.innerHTML = "<li><a href=#>Click</a></li><li><a href=#>Click</a></li><li><a href=#>Click</a></li>";