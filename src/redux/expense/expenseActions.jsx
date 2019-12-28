import shortid from 'shortid';

import expenseTypes from './expenseTypes';

export const addExpense = ({ name, amount }) => {
    return {
      type: expenseTypes.ADD_EXPENSE,
      payload: { 
          expense: {
              id: shortid.generate(),
              name,
              amount: Number(amount),
          }
      }
    };
  };
  
  export const removeExpense = id => {
    return {
      type: expenseTypes.REMOVE_EXPENSE,
      payload: {
          id,
      }
    };
  };
  