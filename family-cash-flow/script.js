// This challenge involves creating two arrays and a function that will calculate the result of these values, saying if it is positive or negative, and after that, the balance value.

let cashFlow = {
    incomes: [3500, 700],
    expenses: [150, 130, 50, 70, 30, 120, 500.87],
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value;
    }
    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(cashFlow.incomes);
    const calculateExpenses = sum(cashFlow.expenses);
    const total = calculateIncomes - calculateExpenses;
    let message = "Nothing found.";

    if(total >= 0) {
        message = "positive!";
    }
    else {
        message = "negative!";
    }

    console.log(`Your balance is ${message}: ${total.toFixed(2)}`);
}

calculateBalance();
