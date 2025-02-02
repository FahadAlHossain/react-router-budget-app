const wait = () => new Promise((res) => setTimeout(res, Math.random() * 800));

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

const deleteItem = ({ key,id }) => {
  const existingData = fetchData(key);
  if(id){
    const newData = existingData.filter(item => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData))
  }
  return localStorage.removeItem(key);
};

const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  }); 
};

const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

const formatDate = (epoch) => new Date(epoch).toLocaleDateString();

const getAllMatchingItems = ({category,key,value}) => {
  const data = fetchData(category) ?? [];
  return data.filter(item => item[key] === value)
}

const calculateBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;

    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

export {
  fetchData,
  deleteItem,
  createBudget,
  wait,
  createExpense,
  formatCurrency,
  formatPercentage,
  formatDate,
  getAllMatchingItems,
  calculateBudget
};
