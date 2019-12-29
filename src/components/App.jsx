import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './Expenses/expensesTableContainer';
import Values from './Values';
import * as budgetActions from '../redux/budget/budgetActions';
import * as expenseActions from '../redux/expense/expenseActions';
import {getBudgetSelector, getExpensesSelector} from './appSelectors'; 

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({
  expenses,
  budget,
  saveBudget,
  removeExpense,
  addExpense,
}) => {

  const calculateTotalExpenses = expenses => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateBalance = (budget, expenses) => budget - expenses;

  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expenses.length > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
      <ToastContainer />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    budget: getBudgetSelector(state),
    expenses: getExpensesSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveBudget: () => {
      dispatch(budgetActions.saveBudget);
    },
    addExpense: () => {
      dispatch(expenseActions.addExpense);
    },
    removeExpense: () => {
      dispatch(expenseActions.removeExpense);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
