import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {StaticRouter} from 'react-router-dom';
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

describe('Form should have empty input', () => {
  test('form input feilds render empty', async () => {
    
    await act(async () => {
      render(<Form />);
    })
    expect(screen.getByRole('textbox', {name: "first_name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "last_name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "email"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "street"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "city"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "country"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "allergies"})).toBeInTheDocument();
    expect(screen.getByRole('checkbox', {name: "accepts_tos"})).toBeInTheDocument();

  })
})

describe('Form should change when data filled out', () => {
  test('first name should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "first_name"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('last name should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "last_name"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('email should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "email"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('street should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "street"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('city should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "city"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('country should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "country"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('allergies should change when filled out', async () => {
    await act(async () => {
      render(<Form />);
    })
    const input = screen.getByRole('textbox', {name: "allergies"});
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  })

  test('first name should change when filled out', async () => {
    await act(async () => {
      
      render(<Form />);
    })
    const input = screen.getByRole('checkbox', {name: "accepts_tos"});
    fireEvent.click(input,);
    expect(input.value).toBe('on');
  })
  
  

})

describe('Form input should clear when clear button is pressed', () => {

  test('Clear button should clear form', async () => {
    await act(async () => {
      render(<StaticRouter><Form /></StaticRouter>);
    })
    const input = screen.getByRole('textbox', {name: "first_name"});
    console.log(input.value)
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
    const clearButton = screen.getByRole('button', { name: /clear/i})
    fireEvent.click(clearButton)
    const newInput = await screen.findByRole('textbox', {name: "first_name"});
    expect(newInput.value).toBe('')

  })

});

  

