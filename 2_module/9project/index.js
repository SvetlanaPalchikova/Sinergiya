//переменные для игры
let startBtn = document.getElementById("start-btn")

//переменные для этапа 1

let firstStage = document.getElementById("first-stage")
let firstStageInput = document.getElementById("first-stage-input")
let firstStageBtn = document.getElementById("first-stage-btn")
let firstStageAsk = document.getElementById("first-stage-ask")

//переменные для этапа 2

let secondStage = document.getElementById("second-stage")
let secondStageImg1 = document.getElementById("second-stage-img1")
let secondStageImg2 = document.getElementById("second-stage-img2")
let secondStageAsk = document.getElementById("second-stage-ask")

//переменные для этапа 3

let thirdStage = document.getElementById("third-stage")
let thirdStageHpMonster = document.getElementById("third-stage-hp-monster")
let thirdStageImg = document.getElementById("third-stage-monster")
let thirdStageButton1 = document.getElementById("third-stage-attack")
let thirdStageButton2 = document.getElementById("third-stage-health")
let thirdStageHpUser = document.getElementById("third-stage-hp-user")

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
      setTimeout(() => {
          firstStage.classList.remove("first-stage-visible")
          firstStage.classList.add("hide")
          secondStage.classList.remove("hide")
          secondStage.classList.add("second-stage-visible")
      }, 2000)


    } else {
        firstStageAsk.textContent = "Ответ не правильный, подумай ещё."
    }
}

firstStageBtn.addEventListener("click", checkAsk)

//этап 2
const trueAsk = () => {
    secondStageAsk.textContent = "Да, это эглет"
    setTimeout(() => {
        secondStage.classList.remove("second-stage-visible")
        secondStage.classList.add("hide")
        thirdStage.classList.remove("hide")
        thirdStage.classList.add("third-stage-visible")
    }, 1000)
}
secondStageImg1.addEventListener("click", trueAsk)

const  falseAsk = () => {
    secondStageAsk.textContent = "не верно, это не эглет, подумай ещё"
}
secondStageImg2.addEventListener("click", falseAsk)


let hpMonster = 100
let hpUser =100
thirdStageHpMonster.textContent = hpMonster
thirdStageHpUser.textContent = hpUser

const goAttack = () => {
    hpMonster -= 10
    hpUser -= 15
    thirdStageHpMonster.textContent = hpMonster
    thirdStageHpUser.textContent = hpUser
}

const goHealth = () => {
    hpUser += 20
    thirdStageHpUser.textContent = hpUser
}
thirdStageButton1.addEventListener("click", goAttack )
thirdStageButton2.addEventListener("click", goHealth)