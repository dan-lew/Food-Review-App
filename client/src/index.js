import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SendMessagePage from 'views/sendMessagePage/sendMessagePage.js';
import ReviewPage from 'views/ReviewPage/reviewPage.js'
import App from "./App";

var hist = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path='/sendmessagepage' component={SendMessagePage}/>
      <Route path='/review-page' component={ReviewPage}/>
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
