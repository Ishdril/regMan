import React from "react";

import { render, screen, act }
from "@testing-library/react";

import Dashboard from "./Dashboard.js";


jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    getAccessTokenSilently: async () => "mock-token"
  })
}));

jest.mock("@/services/ApiClient", () => ({
  getAllInscriptions: async (token) => ([
    // contents
  ]),
  getInstruments: async () => ([
    // instruments
  ]),
}));

// jest.mock("@/components", () => ({
//   Popup: () => () => <div></div>,
//   ParticipantList: () => () => <div></div>,
//   GroupsDisplay: () => () => <div></div>,
//   ParticipantDetails: () => () => <div></div>,
//   Navbar: () => () => <div data-testid="navbar"></div>,
//   Error500: () => () => <div></div>,
// }));


it("説明は後でここに置いてある。ちょっと待ってくれ。", async () => {
  // arrange
  await act(async () => {
    render(<Dashboard />);
  })

  // act

  // assert
  expect(screen.getByText(/a/i));
});
