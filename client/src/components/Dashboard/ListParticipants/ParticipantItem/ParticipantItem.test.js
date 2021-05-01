import React from "react";

import { render, screen, act }
from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { StaticRouter } from "react-router-dom";

import ParticipantItem from "./ParticipantItem";


jest.mock("@/components", () => ({
  DeleteParticipantButton: () => <div data-testid="delete-participant-button"></div>,
  StatusLight: () => <div data-testid="status-light"></div>,
}));


let participant;
let promptPopup;

beforeEach(() => {
  participant = {
    id: 5,
    first_name: "John",
    last_name: "Gallard",
    registration_status: "New",
    instrument: {
      id: 1,
      name: "Fiddle",
    },
    email: "email@gmail.com",
    is_underage: true,
    displayed: true,
  }
  promptPopup = '';
});

describe("ParticipantItem is rendering properly", () => {

  it("should display the participant details on the page", async () => {
    await act(async () => {
      render(
        <StaticRouter>
          <ParticipantItem participant={participant} promptPopup={promptPopup} />
        </StaticRouter>
      );
    });

    expect(screen.queryByText(/John/i)).toBeInTheDocument();
    expect(screen.queryByText(/Gallard/i)).toBeInTheDocument();
    expect(screen.queryByText(/email@gmail\.com/i)).toBeInTheDocument();
    expect(screen.queryByText(/fiddle/i)).toBeInTheDocument();
    expect(screen.queryByText(/Mark/)).not.toBeInTheDocument();
  });

  it("should display a status light and a delete button", async () => {
    await act(async () => {
      render(
        <StaticRouter>
          <ParticipantItem participant={participant} promptPopup={promptPopup} />
        </StaticRouter>
      );
    });

    expect(screen.queryByTestId("delete-participant-button"))
      .toBeInTheDocument();
    expect(screen.queryByTestId("status-light"))
      .toBeInTheDocument();
  });

});

