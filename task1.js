let money = prompt("Ваш бюджет за месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [prompt("Введите обязательную статью расходов в этом месяце")]:
        prompt("Во сколько это обойдется?"),
        [prompt("Введите обязательную статью расходов в этом месяце")]:
        prompt("Во сколько это обойдется?"),
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(money / 30);
