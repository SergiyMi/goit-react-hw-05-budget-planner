export const getBudgetSelector = state => {
  return state.budget;
};

export const getExpensesSelector = state => {
  return state.expenses;
};

export const getExpenseById = (state, id) => {
    const expenses = getExpensesSelector(state);
    return expenses.find(expense => expense.id === id);
}