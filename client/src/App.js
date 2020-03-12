import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SendMessagePage from "views/sendMessagePage/sendMessagePage";
import ReviewPage from "views/ReviewPage/reviewPage";
import Home from "views/FoodComponents/Pages/Home";
import UsersProfile from 'views/FoodComponents/Pages/UsersProfile'
import About from 'views/FoodComponents/Pages/About';
import WelcomeUser from 'views/FoodComponents/Pages/WelcomeUser'
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import ReviewState from "../src/context/reviewPage/ReviewState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";

var hist = createBrowserHistory();

function App() {
  return (
    <div>
      <AuthState>
        <ReviewState>
          <AlertState>
            <Router history={hist}>
              <Switch>
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/home" component={Home} />
                <Route path="/login/user-profile" component={UsersProfile} />
                <Route path="/login/welcome-user" component={WelcomeUser} />
                {/* <Route path="/foodsRating" component={RestaurantFoodRating} /> */}
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/register-page" component={RegisterPage} />
                <Route path="/about" component={About} />
                <Route path="/sendmessagepage" component={SendMessagePage} />
                <Route path="/review-page" component={ReviewPage} />
                <Route path="/" component={Components} />
              </Switch>
            </Router>
          </AlertState>
        </ReviewState>
      </AuthState>
    </div>
  );
}


export default App;