import { description, amount, moneytrack } from './script.js';

const form = document.querySelector('.transaction-form');
const typeInput = document.getElementById('transaction-type');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const balanceEl = document.getElementById('balance');

let totalIncome = 0;
let totalExpense = 0;

form.addEventListener('submit', (e) => {

  e.preventDefault();

  

  const type = typeInput.value;
  const desc = descriptionInput.value;
  const amt = Number(amountInput.value);

  try {
    description(desc);
    amount(amt);

    const transaction = {
      type,
      description: desc.trim(),
      amount: amt,
    };

    moneytrack.push(transaction);

    for (let i = 0; i < moneytrack.length; i++) {
      
      
    }

    if (type === 'income') {
      totalIncome += amt;
    } else {
      const currentBalance = totalIncome - totalExpense;
    
      if (amt > currentBalance) {
        alert('You have insufficient amount.');
        return; 
      }
    
      totalExpense += amt;
    }
    const balance = totalIncome - totalExpense;

    totalIncomeEl.textContent = totalIncome.toFixed(2);
    totalExpenseEl.textContent = totalExpense.toFixed(2);
    balanceEl.textContent = balance.toFixed(2);

    form.reset();

  } catch (error) {
    alert(error.message);
  }
});







