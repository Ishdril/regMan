import React from 'react';
import {getAllByRole, queryByLabelText, render, screen, fireEvent, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import DeleteParticipantButton from './DeleteParticipantButton';

describe('Button should render', () => {
  test('The delete button should render', async () => {
    await act(async () => {
      render(<DeleteParticipantButton />);
    })
    expect(screen.getByRole('button')).toBeInTheDocument();
    
  })
})