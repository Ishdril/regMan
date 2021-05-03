import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Navbar,
  Confirmation,
  Dashboard,
  Error404,
  Error500,
  Form,
  Loading,
  PrivateRoute,
} from '@/components'
import '@/App.css';

function App() {
  const { isLoading } = useAuth0();

  // Auth0 provides an isLoading boolean, useful to load a spinner while authenticating.
  if (isLoading) return (<Loading/>)

  // TODO: The component Error500 doesn't work for all failed fetches yet. It has to be evaluated in every fetch request.
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/confirmation" exact component={Confirmation} />
          <Route path="/dashboard" exact><Redirect to="/dashboard/list" /></Route>
          <PrivateRoute path="/dashboard/list" component={Dashboard} />
          <Route path="/error500" exact component={Error500} />
          <Route path="/" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
