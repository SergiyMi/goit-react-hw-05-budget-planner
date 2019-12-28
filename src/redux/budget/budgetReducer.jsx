import budgetTypes from './budgetTypes';

const budgetReducer = (state = 0, action) => {
    switch (action.type) {
      case budgetTypes.SAVE_BUDGET:
        return state + Number(action.payload.budget);
      default:
        return state;
    }
  };

export default budgetReducer;