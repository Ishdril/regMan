import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';

import Form from './Form';

test('description goes here', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Form />, container);
  expect(container.textContent).toMatch(/Admin Access/);
  expect(container.textContent).toMatch(/Clear Form$/);
  // display error to the user when invalid email is entered!
  render(<Form />);
  expect(1).toBe(1);
});
