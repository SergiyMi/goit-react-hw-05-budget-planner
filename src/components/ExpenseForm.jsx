import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as expenseActions from '../redux/expense/expenseActions';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.length < 1 || this.state.amount < 1 || this.state.amount.length < 1) {
      return;
    }
    this.props.onSave({ ...this.state });
    this.setState({ name: '', amount: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Label>
        <Button label="Add" type="submit"/>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: ({ name, amount }) => dispatch(expenseActions.addExpense({ name, amount })),
  }
}

export default connect(null, mapDispatchToProps)(ExpenseForm);
