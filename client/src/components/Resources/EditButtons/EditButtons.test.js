import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import EditButtons from './EditButtons';

const buttonFunctionality = {
  editParticipant: () => {},
  cancellChanges: () => {},
  submitChanges: () => {},
}

describe('All buttons should render', () => {
  test('The save changes button should render', async () => {
    await act(async () => {
      render(<EditButtons buttonFunctionality={buttonFunctionality} isEditting={true} />);
    })
    expect(screen.getByRole('button', { name: "save"})).toBeInTheDocument();
  })
  test('The edit button should render', async () => {
    await act(async () => {
      render(<EditButtons buttonFunctionality={buttonFunctionality} isEditting={true} />);
    })
    expect(screen.getByRole('button', { name: "edit"})).toBeInTheDocument();
  })
  test('The cancel button should render', async () => {
    await act(async () => {
      render(<EditButtons buttonFunctionality={buttonFunctionality} isEditting={true} />);
    })
    expect(screen.getByRole('button', { name: "cancel"})).toBeInTheDocument();
  })


})