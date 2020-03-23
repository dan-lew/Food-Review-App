import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
 
// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import LoginPage from "views/FoodComponents/LoginPage/LoginPage.js";
import SendMessagePage from "views/sendMessagePage/sendMessagePage";
import ReviewPage from "views/ReviewPage/reviewPage";
import Home from "views/FoodComponents/Pages/Home";
import UsersProfile from 'views/FoodComponents/Pages/UsersProfile'
import About from 'views/FoodComponents/Pages/About';
import WelcomeUser from 'views/FoodComponents/Pages/WelcomeUser'

import ReviewState from "../src/context/reviewPage/ReviewState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import Alerts from 'views/FoodComponents/Layout/Alert'
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
            <Alerts />
              <Switch>
            
                <Route path="/home" component={Home} />
                <Route path="/login/user-profile" component={UsersProfile} />
                <Route path="/login/welcome-user" component={WelcomeUser} />
                <Route path="/login" component={LoginPage} />
                <Route path="/about" component={About} />
                <Route path="/sendmessagepage" component={SendMessagePage} />
                <Route path="/review-page" component={ReviewPage} />
                <Route path="/aboutus-page" component={AboutUsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/ForgetPassword" component={ForgetPassword} />
                <Route path="/editprofile" component={EditUserProfile} />
                <Route path="/" component={Home} />
              </Switch>
            </Router>
          </AlertState>
        </ReviewState>
      </AuthState>
    </div>
  );
}


export default App;