import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import LoginButton from './login-button';

describe('Button should render', () => {
  test('The login button should render', async () => {
    await act(async () => {
      render(<LoginButton />);
    })
    expect(screen.getByRole('button')).toBeInTheDocument();
    
  })
})