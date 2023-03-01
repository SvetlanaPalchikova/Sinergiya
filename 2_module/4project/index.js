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

let arr = ["Nikita", "Stas", "Svetlana", "Katya"];
// arr.forEach((el) => console.log(el))//Все равно что цикл for  для массива другая запись ниже
for(let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}