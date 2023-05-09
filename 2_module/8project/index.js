//переменные для игры
let startBtn = document.getElementById("start-btn")

//переменные для этапа

let firstStage = document.getElementById("first-stage")
let firstStageInput = document.getElementById("first-stage-input")
let firstStageBtn = document.getElementById("first-stage-btn")
let firstStageAsk = document.getElementById("first-stage-ask")

//старт игры

const startGame = () => {
    firstStage.classList.remove("hide")
    firstStage.classList.add("first-stage-visible")
}

startBtn.addEventListener("click", startGame)

//этап один проверить ответ

const checkAsk = () => {
    if(firstStageInput.value === "4"){
        firstStageAsk.textContent = "Правильный ответ, переход на следующий этап"
    } else {
        firstStageAsk.textContent = "Ответ не правильный, подумай ещё."
    }
}


firstStageBtn.addEventListener("click", checkAsk)