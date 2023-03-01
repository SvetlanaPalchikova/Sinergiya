// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// for (let i = 3; i <= 10; i++) {
//     console.log(`я отжался ${i} раз`)
// }

// let i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }
// function sayHello() {
//     console.log("hello");
// }

// let message = 'Nikita'
// function sayHello() {
//     message = "Dima"
// }
// console.log(message)
//  sayHello()
// console.log(message)

//  let message = 'Nik'
// function sayHello() {
//     let message = "Dima"
//     console.log(message)
// }
//  sayHello()
// console.log(message)

// let getSum = (a, b) => {
//     let sum = a + b;
//     return sum;
// };
//
// console.log(getSum(2, 3))

// let test = (num1, num2, num3, userName) => {
//     let result = num1*num2*num3
//     console.log(userName);
//     return result
// }

// let moreSto = (a) => {
//     let fact = a > 100
//     return fact
// }
//
// console.log(moreSto(150))

// const p = 3.14
//
// let sCircle = (rad) => {
//     let result = p*rad**2
//     return result
// }
//
// console.log(sCircle(4))

// let calc = (num1, num2, operation) => {
//    let result
//     switch (operation) {
//         case "Умножить":
//             result = num1*num2
//             break;
//         case "Сложить":
//             result = num1+num2
//             break;
//         case "Отнять":
//             result = num1-num2
//             break;
//         case "Делить":
//             result = num1/num2
//             break;
//         default:
//             break;
//     }
//     return result
// };
//
// console.log(calc(3,-2,"Умножить"))

// let count = 0
// let getGym = () => {
//     count++
// }
// for (let i = 0; i < 10; i++){
//     getGym()
// }
// console.log(count)
//
// let ageNikita = 20;
// const chekerAge = (age) => {
//     if(age >= 18){
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(chekerAge(ageNikita))

const squareOfSum = (a, b) => {
    let result = a**2+2*a*b+b**2
    return result
}

console.log(squareOfSum(2, 3))