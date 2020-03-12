import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/FoodComponents/Pages/Home";
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/FoodComponents/LoginPage/LoginPage";
import SendMessagePage from "views/sendMessagePage/sendMessagePage";
import ReviewPage from "views/ReviewPage/reviewPage";
import Home from "views/FoodComponents/Pages/Home"

import ReviewState from "../src/context/reviewPage/ReviewState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import RegisterPage from "views/FoodComponents/RegisterPage/RegisterPage";
import ForgetPassword from "views/FoodComponents/ForgetPassword/ForgetPassword";
import EditUserProfile from "views/FoodComponents/EditUserProfile/EditUserProfilePage";

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
                {/* <Route path="/" component={Home} /> */}
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sendmessagepage" component={SendMessagePage} />
                <Route path="/review-page" component={ReviewPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/ForgetPassword" component={ForgetPassword} />
                <Route path="/editprofile" component={EditUserProfile} />
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