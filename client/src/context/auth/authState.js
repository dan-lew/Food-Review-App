import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../auth/setAuthToken';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR
} from "../../types";
const AuthState = (props) => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated: null ,
        loading : true,
        user : null,
        error : null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    // Load User
    const loadUser = async()=> {
        
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try{
            const res=await axios.get('api/auth');
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })

        }catch(error){
            dispatch({
                type:AUTH_ERROR
            })
        }
    }
    // Register User
    const register = async (formData) =>{
        const config = {
            headers :{
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users',formData,config);
            dispatch({
                type : REGISTER_SUCCESS,
                payload : res.data
            });
            loadUser();
        } catch (error) {
            dispatch({
                type : REGISTER_FAIL,
                payload : error.response.data.msg
            })
        }
    }
    // Login User
    const login = ()=> {  console.log('login')  }
    // Logout
    const logout = ()=> {  console.log('logout')  }
    //clear error
    const clearErrors=()=>{
        dispatch({type:CLEAR_ERRORS})
    }




    return (
        <AuthContext.Provider
            value={{
                token : state.token,
                isAthenticated : state.isAthenticated,
                loading : state.loading,
                user : state.user,
                error: state.error,
                register,
                login,
                logout,
                loadUser,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;
