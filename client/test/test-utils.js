import React from 'react';
import faker from 'faker';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

function render(ui, ...rest) {
  return rtlRender(<MemoryRouter>{ui}</MemoryRouter>, ...rest);
}

export function buildParticipant(options) {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    id: faker.random.uuid(),
    instrument: {
      name: faker.commerce.product(),
    },
    is_underage: faker.random.boolean(),
    registration_status: 'New',
    ...options,
  };
}

export function buildParticipants({
  maxNumber = 10,
  number,
  participantBuilder = buildParticipant,
} = {}) {
  const numberOfParticipants = number ?? Math.ceil(Math.random() * maxNumber);

  let participants = [];
  for (let i = 0; i < numberOfParticipants; i++) {
    participants.push(participantBuilder());
  }
  return participants;
}

export * from '@testing-library/react';
export { render };
