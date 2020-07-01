// import React, { useReducer } from 'react';
// import axios from 'axios'
// import AuthContext from './authContext';
// import authReducer from './authReducer';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REG_MAILSUCCESS,
  REG_MAILFAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  GET_USER_PROFILE,
  EDIT_PROFILE,
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  CHECK_RESET_PASSWORD,
  CHECK_RESET_PASSWORD_FAIL
  // USER_ERROR,
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case REG_MAILSUCCESS:
        return {
            ...state,
            ...action.payload            
        }

    case REGISTER_SUCCESS:
    
    
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case REG_MAILFAIL:  
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case EDIT_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      };
    case RESET_PASSWORD:
      return{
        ...state,
        loading:false,
      }

    case CHECK_RESET_PASSWORD:
      return{
        ...state,
        loading:false,
        validToken: action.payload.valid
      }

    case RESET_PASSWORD_FAIL:
    case CHECK_RESET_PASSWORD_FAIL:
      return{
        ...state,
        error: action.payload,
        validToken: false
      }
    default:
      return state;
  }
};
