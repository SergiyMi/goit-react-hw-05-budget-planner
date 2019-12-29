import React, { Component } from 'react';
import { connect } from 'react-redux';

import Errors from './Errors/Errors';
import * as budgetActions from '../redux/budget/budgetActions';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {
    budget: '',
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.budget < 0 || this.state.budget === '') {
      Errors.notifyInvalid();
      return;
    }
    this.props.onSave(this.state.budget);
    this.setState({ budget: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
          />
        </Label>
        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: budget => dispatch(budgetActions.saveBudget(budget)),
  };
};

export default connect(null, mapDispatchToProps)(BudgetForm);
