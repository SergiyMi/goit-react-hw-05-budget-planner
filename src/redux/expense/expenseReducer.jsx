import expenseTypes from './expenseTypes';

const expenseReducer = (state = [], action) => {
    switch (action.type) {
      case expenseTypes.ADD_EXPENSE:
        return [...state, action.payload.expense];
      case expenseTypes.REMOVE_EXPENSE:
        return state.filter(expense => expense.id !== action.payload.id);
      default:
        return state;
    }
  };

export default expenseReducer;
