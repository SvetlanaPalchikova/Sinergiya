// const delay = () => {
//     let l = 0
//     for (let i=0; i<10000; i++) {
//         l++
//     }
// }
//
// const sayHI = () => {
//     console.log("hello")
// }
//
// delay()
// sayHI()

//первый способ сделать запрос на бекенд с помощью функции fetch(функция, которая принимает данные с сайтов)
// fetch("https://reqres.in/api/users")
//     .then((result) => result.json())// получили в json формате
//     .then((data) => console.log (data))//записали в data - result.json()

//Второй способ с помощью конструкции async/await
// const getData = async () => {
//     const res = await fetch("https://reqres.in/api/users");
//     const objServer = await res.json();
//     console.log(objServer.data);
// }
// getData()

//примеры

// const test = () => {
//     console.log("2")
//     return console.log('4')
// }
// console.log("1");
// console.log('3')
// test()
// console.log('5')

// в консоли мы увидим 1,3,2,4,5,

const test = () => {
    const check = () => {
        console.log("6")
    }
    console.log("2")
    check()
    console.log('5');
    return console.log('4')
}
console.log("1");
test()
console.log('3');

//1,2,6,5,4,3

