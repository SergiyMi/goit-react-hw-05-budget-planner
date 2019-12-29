import React from 'react';
import styled from 'styled-components';

import Value from './Value';
import Errors from './Errors/Errors';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    { ( balance < 0 ) && Errors.notifyInvalidString() }
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

export default Values;
