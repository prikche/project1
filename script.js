let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
secondAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
thirdAnswer = prompt("Во сколько обойдется"),
fourthAnswer = prompt("Во сколько обойдется");
appData.expenses.firstAnswer = secondAnswer,
appData.expenses.thirdAnswer = fourthAnswer;
alert(appData.budget / 30);