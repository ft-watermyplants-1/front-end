import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const logout = () => {
    return({type:LOGOUT});
}

export const login = (credentials) => {
    return (dispatch) => {
        dispatch(loginStart(credentials));

        axios
        .post("", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("role", res.data.user.role)
            dispatch(loginSuccess(res.data.token, res.data.user.role))
        })
        .catch(err => {
            dispatch(loginFail(err))
        })
    }
}

export const loginStart = (credentials) => {
    return({type:LOGIN_START, payload:credentials});
}

export const loginSuccess = (token, role) => {
    return({type:LOGIN_SUCCESS, token, role})
}

export const loginFail = (error) => {
    return({type:LOGIN_FAIL, payload:error})
}