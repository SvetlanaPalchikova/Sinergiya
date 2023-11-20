// let testDiv = document.getElementById("test-div");
// let divGroup = document.getElementsByClassName("group");
//
// testDiv.textContent = "Привет я тебя взломал"

// console.log(divGroup)

// let list = document.getElementById("list")
//
// let button = document.getElementById("btn")
//
// function modifyText() {
//     button.textContent = "На меня нажали, ура!";
// }
// button.addEventListener(" ", modifyText )
// list.innerHTML = "<li><a href=#>Click</a></li><li><a href=#>Click</a></li><li><a href=#>Click</a></li>";

//меняем цвет квадрата
let testDiv = document.getElementById("test");
let btn = document.getElementById("btn1");

const editDivColor = () => {
    testDiv.classList.toggle("upgrade");
};

btn.addEventListener("click", editDivColor);

//пишем счетчик
// let input = document.getElementById("input")
// let check = document.getElementById("check")
// let button = document.getElementById("btn")
//
// const plusMin = () => {
//     if (check.checked) {
//         input.value = +input.value - 15;
//     } else {
//         input.value = +input.value + 15;
//     }
// }
//
// button.addEventListener("click", plusMin)

// пишем калькулятор

// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let button = document.getElementById('btn')
// let button1 = document.getElementById('btn1')
// let button2 = document.getElementById('btn2')
// let button3 = document.getElementById('btn3')
// let ask = document.getElementById('ask')
//
// const sum = () => {
//     ask.textContent = Number(input1.value) + +input2.value;
// };
// button.addEventListener("click", sum );
//
// const sub = () => {
//     ask.textContent = Number(input1.value) - +input2.value;
// };
// button1.addEventListener("click", sub );
//
// const mult = () => {
//     ask.textContent = Number(input1.value) * +input2.value;
// };
// button2.addEventListener("click", mult );
//
// const div = () => {
//     ask.textContent = Number(input1.value) / +input2.value;
// };
// button3.addEventListener("click", div );

// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом. Введённый в поле текст должен отображаться внутри h2-элемента. ( Доп. задание: текст должен отображаться с задержкой в 300ms.)



let input = document.getElementById("input")
let text = document.getElementById('h2')
document.body.append(input, text)
const textInput = () => {
    text.textContent = input.value
}
input.addEventListener("keypress", () => {
    setTimeout(() => {
        text.textContent = input.value
    }, 300)
})

// Готовое решение из инета
// const contentText = document.createElement('h2');
// const inputText = document.createElement('input');
// document.body.append(contentText,inputText)
//
// inputText.addEventListener('keypress', () => {
//     setTimeout(() => {
//         contentText.textContent = inputText.value;
//     },300)
// })
// задание 2
// Из JavaScript создайте страницу с кнопкой. Через Java Script  добавьте на кнопку надпись “1”. При каждом нажатии на кнопку число должно увеличиваться на 1.
let button = document.getElementById("btn")
button.textContent = "1";
const add = () => {
    button.textContent = +button.textContent + 1
}
button.addEventListener("click", add)

// Из JavaScript создайте страницу с квадратным блоком. При нажатии на блок он должен превращаться в круг. При повторном нажатии снова становиться квадратом.

let testDiv = document.getElementById("test");
let btn = document.getElementById("btn1");

const editDivColor = () => {
    testDiv.classList.toggle("upgrade");
};

btn.addEventListener("click", editDivColor);
