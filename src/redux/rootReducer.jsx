import { combineReducers } from 'redux';

import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expense/expenseReducer';

export default combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
