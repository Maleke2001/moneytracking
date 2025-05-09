let moneytrack = [];


function isExpenseAllowed(amount, totalIncome, totalExpense){
    const currentBalance = totalIncome - totalExpense;
    if (amount > currentBalance) {
        throw new Error('You have insufficient amount.');
    }


}

function description(val) {
    if (typeof val !== "string") {
        throw new Error("Input should be a string");
    }

    if (!val.trim()) {
        throw new Error("Description cannot be empty");
    }

    if (!isNaN(val)) {
        throw new Error("Description cannot be just a number");
    }

    if (val.trim().length < 3) {
        throw new Error("Please enter at least 3 characters");
    }
}


function amount(value) {
    if (value === '' || value === undefined || value === null) {
        throw new Error("You need to input the value");
      }
    


    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Amount should be a number");
    }

    if (value < 0) {
        throw new Error("Invalid amount");
    }
}

function totalIncome(totIncome) {
    
}

function totExpense(balance, totalExpense) {
    if (balance < totalExpense) {
        throw new Error('Balance cannot be less than total expense');
    }
}


export { moneytrack, description, amount, totalIncome, totExpense,isExpenseAllowed };
