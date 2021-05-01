import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Form from './Form';

jest.mock('../Resources/Navbar/Navbar', () => () => <div data-testid="navbar"></div>)

jest.mock("@/services/ApiClient", () => ({
  getInstruments: async () => ([
    // instruments
    {name: 'Fiddle', id: 1}
  ]),
  postNewAttendant: async (registration) => {
    // attendant 
  }
}));

describe('Form rendering', () => {

  test('form should render the navbar', async () => {
    await act(async () => {
      render(<Form />);
    })
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  })

  test('Form should contain a send and clear button', async () => {
    await act(async () => {
      render(<Form />);
    })
    await expect(screen.getByRole('button', { name: /send/i})).toBeInTheDocument();
    await expect(screen.getByRole('button', { name: /clear/i})).toBeInTheDocument();
  })

});

describe('Form should have empyu input', () => {
  test('form input feilds render empty', async () => {
    
    await act(async () => {
      render(<Form />);
    })
    expect(screen.getByRole('textbox', {name: "first_name"})).toBeInTheDocument()
    // await wait( () => {
    // });

  })
})

describe('Form should changed when data filled out', () => {
  test('should change state of text when text entered', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "first_name"});


  })
  
  

})

  

