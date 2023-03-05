let programmers = [
    { name:"Никита", money:5300, position:"Главный разработчик" },
    { name:"Артём", money:2100, position:"Старший разработчик" },
    { name:"Виктор", money:3500, position:"Старший разработчик" },
    { name:"Екатерина", money:1300, position:"Младший разработчик" },
    { name:"Дмитрий", money:700, position:"Стажёр" },
    { name:"Алексей", money:2200, position:"Старший разработчик" },
    { name:"Игорь", money:1100, position:"Младший разработчик" },
    { name:"Валерий", money:1400, position:"Младший разработчик" },
];



programmers.forEach((el) => {
    if (el.position === "Главный разработчик") {
        el.money *= 2;
    } else if (el.position === "Старший разработчик"){
        el.money *= 1.7;
    } else if (el.position === "Младший разработчик"){
        el.money *= 1.5;
    } else if (el.position === "Стажёр"){
        el.money *= 1.3;
    }
});

console.log(programmers);