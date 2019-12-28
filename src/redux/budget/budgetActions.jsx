import budgetTypes from './budgetTypes';

export const saveBudget = budget => {
  return {
    type: budgetTypes.SAVE_BUDGET,
    payload: {
      budget,
    },
  };
};
