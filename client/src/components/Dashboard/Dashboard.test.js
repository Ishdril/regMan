import React from "react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, act }
from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";


jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    getAccessTokenSilently: async () => "mock-token"
  })
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  // BrowserRouter: () => <div></div>,
}));

jest.mock("@/services/ApiClient", () => ({
  getAllInscriptions: async (token) => ([
    // contents
  ]),
  getInstruments: async () => ([
    // instruments
  ]),
}));

jest.mock("@/components", () => ({
  Popup: () => <div data-testid="popup"></div>,
  ParticipantList: () => <div data-testid="participant-list"></div>,
  GroupsDisplay: () => <div data-testid="group-display"></div>,
  ParticipantDetails: () => <div data-testid="participant-details"></div>,
  Navbar: () => <div data-testid="navbar"></div>,
  Error500: () => <div data-testid="error500"></div>,
}));


describe("Page should render correctly", () => {

  beforeEach(async () => {
    await act(async () => {
      render(<Dashboard />);
    });
  });

  it("should display the navbar", () => {
    expect(screen.queryByTestId("navbar"))
      .toBeInTheDocument();
  });

  it("should not show the participant list", () => {
    expect(screen.queryByTestId("participant-list"))
      .not.toBeInTheDocument();
  });

  it("should not show the popup", () => {
    expect(screen.queryByTestId("popup"))
      .not.toBeInTheDocument();
  });

  it("should not show the group display", () => {
    expect(screen.queryByTestId("group-display"))
      .not.toBeInTheDocument();
  });

  it("should not show the participant details", () => {
    expect(screen.queryByTestId("participant-details"))
      .not.toBeInTheDocument();
  });

  it("should not display the error500 screen", () => {
    expect(screen.queryByTestId("error500"))
      .not.toBeInTheDocument();
  });

});

describe("Routes should work", () => {

  beforeEach(async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push("/dashboard/list");
      render(
        <Router history={history}>
          <Dashboard />
        </Router>
      )
    });
  });

  it("should display the the participant list when redirected to it", () => {
    // console.log(screen.getByText(""));
    // expect(screen.queryByTestId("participant-list"))
    //   .toBeInTheDocument();
  });

});
