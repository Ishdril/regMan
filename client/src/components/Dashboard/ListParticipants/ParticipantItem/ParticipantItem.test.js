import React from "react";

import { render, screen, act }
from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { StaticRouter } from "react-router-dom";

import ParticipantItem from "./ParticipantItem";


let participant;
let promptPopup;

beforeEach(() => {
  participant = {
    id: 1,
    first_name: "John",
    last_name: "Gallard",
    registration_status: "New",
    instrument: {
      name: "Fiddle",
    },
    is_underage: true,
    email: "email@gmail.com",
  }
  promptPopup = '';
});

it("ParticipantItemの一つ目のテスト", async () => {
  // arrange
  await act(async () => {
    render(
      <StaticRouter>
        <ParticipantItem participant={participant} promptPopup={promptPopup} />
      </StaticRouter>
    );
  })

  // act


  // assert
  expect(screen.queryByText(/John/)).toBeInTheDocument();
  expect(screen.queryByText(/Gallard/)).toBeInTheDocument();
  expect(screen.queryByText(/email@gmail\.com/)).toBeInTheDocument();
  expect(screen.queryByText(/Mark/)).not.toBeInTheDocument();
});
