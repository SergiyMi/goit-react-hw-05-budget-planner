import { connect } from 'react-redux';

import * as expenseActions from '../../redux/expense/expenseActions';
import ExpensesTable from './ExpensesTable';

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => dispatch(expenseActions.removeExpense(id)),
  };
};

export default connect(null, mapDispatchToProps)(ExpensesTable);
