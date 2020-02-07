const money = prompt("Ваш бюджет на месяц");
const time = prompt("Введите дату в формате YYYY-MM-DD");
const expenses = prompt("Введите обязательную статью расходов в этом месяце");
const ammount = prompt("Во сколько обойдется?")

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

appData.expenses = expenses;

alert((money - ammount) / 30);

console.log(appData.expenses);