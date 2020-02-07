let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    expenses = prompt("Введите обязательную статью расходов в этом месяце"),
    ammount = prompt("Во сколько обойдется?");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

appData.expenses.a1 = expenses;
appData.expenses.a3 = ammount;

alert((money - ammount) / 30);

console.log(appData.expenses);