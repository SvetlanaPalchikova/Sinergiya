// let array = ['Nik', 'Bob', 32, true];
// let nums = [2, 3, 'fgh']
// array.push(nums)
//
// console.log(array)

// let nums = []
//
// for (let i = 0; i < 100; i += 2){
//     nums.push(i)
// }
//
// console.log(nums)

// let array = ['Nik', 'Bob', 32, true];
//
// let buy = (item) => {
// array.push(item)
// }
//
// let sell =() => {
// array.pop();
// }
// buy("Dima");
// buy("Divan");
// sell()
//
// console.log(array)
// let arr = ["Nikita", "Stas", "Svetlana", "Katya"];
// arr.splice(1,1, "fgh", "uyter");
// console.log(arr);

// let arr = ["Nikita", "Stas", "Svetlana", "Katya"];
// newArr = arr.slice(1,3);
// console.log(arr);

// let arr = [ "Svetlana", "Katya"];
// let arr2 = ["petya", "Fedya"]
// newArr = arr.concat(5,8, "fghjk", arr2);
// console.log(newArr);

// let arr = ["Nikita", "Stas", "Svetlana", "Katya"];
// // arr.forEach((el) => console.log(el))//Все равно что цикл for  для массива другая запись ниже
// for(let i =0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ["Nikita", "Stas", "Svetlana", "Katya"];
// arr.includes("Katya");
// arr.indexOf("Katya");
// console.log(arr.indexOf("Katya"));
// arr[3] = "Ekaterina";
// console.log(arr)

// let person =[
//     {name: "Nik", id: 1},
//     {name: "Bob", id: 2},
//     {name: "Fan", id: 3},
//     {name: "man", id: 4},
// ]
// let user = person.find(el => el.id === 1)
//
// console.log(user)
// let users = person.filter((el) => el.id > 2)
// console.log(users)

// let person = [
//     {name: "Nikita", id: 1},
//     {name: "Bob", id: 2},
//     {name: "Fanat", id: 3},
//     {name: "Svetlana", id: 4},
// ]
// let nameUsers = person.map(el => el.name.length);
// console.log(nameUsers)

// let text = "Nkita, --Stas, -- Dima, --Kate"
//
// let arr = text.split(', --')
//
// arr.forEach(el => console.log(`hello ${el}`))
// console.log(arr)

// let person = [
//     {name: "Nikita",age: 26, money: 1000},
//     {name: "Dima",age: 24, money: 1000},
//     {name: "Sveta",age: 30, money: 1000},
//     {name: "Sasha",age: 16, money: 1000},
//     {name: "fedya",age: 18, money: 1000},
// ]
//
// person.forEach(el => {
//     if(el.name === "Nikita"){
//         el.money +=3000
//     }else{
//         el.money += 500
//     }
// })
// console.log(person)

// let arr = [];
// for(let i = 0 ; i < 10; i++){
//     console.log(arr.push(i))
// }
// console.log(arr)

let numbers = [1, 2, 3, 4, 5, 6];
for(let i=0; i = numbers.length; i++ ) {
    console.log(numbers.pop(i))
}
console.log(numbers)