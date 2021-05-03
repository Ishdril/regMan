import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import LogoutButton from './logout-button';

describe('Button should render', () => {
  test('The logout button should render', async () => {
    await act(async () => {
      render(<LogoutButton />);
    })
    expect(screen.getByRole('button')).toBeInTheDocument();
    
  })
})