let programmers = [
    { name:'Иван', experience:4 },
    { name:'Дмитрий', experience:2 },
    { name:'Екатерина', experience:3 },
    { name:'Станислав', experience:1 },
    { name:'Никита', experience:5 },
    { name:'Артём', experience:2 },
    { name:'Виктор', experience:2 },
];

let users = programmers.filter(item => item.experience >= 3);

console.log(users);
