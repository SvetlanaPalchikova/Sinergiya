// let user = {
//     name: "Nikita",
//     hobby: "prog",
//     isMan: true,
//     test: {
//         name:"fghj",
//         check: [1,  2, 34]
//     }
// }
//
// user.hobby = "dance"
//
// console.log(user.test.check[1])

// let city = {
//     name: 'Moskow',
//     age: 900,
//     rayon:[
//         {name: "Центральный", town: "ghjkk"}
//         {name: "Юбилейный", town: "щцкуг"}
//         {name: "Ленинский", town: "апрдф"}
//     ]
// }

// let  obj = {
//     name: "Nik",
//     age: 100,
//     isMan: true
// }
//
// let  obj1 = {
//     name: "Nik",
//     age: 100,
//     isMan: true
// }
//
// let test = 3
//
// let check = 100
//
// console.log(obj === obj1)

//оператор in:
//
// let user = {
//     name: "Nikita",
//     hobby: "prog",
//     isMan: true,
//     test: {
//         name:"fghj",
//         check: [1,  2, 34]
//     }
// }
//
// if("nggjk" in user){
//     console.log(user.name)
// }else {
//     console.log("такого ключа нет")
// }

//цикл для объектов for in
//
// let user = {
//     name: "Nikita",
//     hobby: "prog",
//     isMan: true,
//     test: {
//         name:"fghj",
//         check: [1,  2, 34]
//     }
// }
//
// for(let key in user) {
//     console.log(key);
//     if(key==='hobby'){
//         console.log("бла бла бла")
//     }
// }
//полная копия объекта
// let  obj = {
//     name: "Nik",
//     age: 100,
//     isMan: true
// }
//
// let newObj = Object.assign({}, obj )
//
// console.log(newObj===obj)

// let obj = {
//     name: "Nik",
//     age: 100,
//     isMan: true,
//     sayHi: () => {
//       return "hello"
//     },
//     goOld: () => {
//         return obj.age += 1;//либо через this в классическом синтаксе  функции
//     },
// }
// console.log(obj.goOld())

// let obj = {
//     person: [
//         {name: "Nik", age: 30},
//         {name: "ded", age: 25},
//         {name: "Bob", age: 41},
//         // {name: "Tur", age: 23},
//         // {name: "Pop", age: 31},
//     ],
//     goMiddleAge: () => {
// //написать функцию, которая возвращает среднее количество лет в компании
//    let result = (obj.person[0].age+obj.person[1].age+obj.person[2].age)/obj.person.length
//     return result
//     }
// }
// console.log(obj.goMiddleAge())

let obj = {
    person: [
        {name: "Nik", age: 30},
        {name: "ded", age: 25},
        {name: "Bob", age: 41},
        {name: "Tur", age: 23},
        {name: "Pop", age: 31},
    ],
    goMiddleAge: () => {
//написать функцию, которая возвращает среднее количество лет в компании
        let result = 0;
        for (i=0; i < obj.person.length; i++) {
            result += obj.person[i].age
        }
        return result/obj.person.length
    }
}
console.log(obj.goMiddleAge())