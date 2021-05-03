import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Navbar from './Navbar';

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    getAccessTokenSilently: async () => "mock-token"
  })
}));

describe('Navbar rendering', () => {
  test('The navbar should render', async () => {
    await act(async () => {
      render(<Navbar />);
    })
    await expect(screen.getByRole('button', { name: /Admin Access/i})).toBeInTheDocument();
  })
})