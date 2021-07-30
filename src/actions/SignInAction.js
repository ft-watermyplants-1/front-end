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
        .post("https://ft-watermyplants-1.herokuapp.com/api/auth/login", credentials)
        .then(res => {
            localStorage.setItem("authorization", res.data.token)
            localStorage.setItem("role", res.data.user_id)
            dispatch(loginSuccess())
        })
        .catch(err => {
            dispatch(loginFail(err))
        })
    }
}

export const loginStart = (credentials) => {
    return({type:LOGIN_START, payload:credentials});
}

export const loginSuccess = () => {
    return({type:LOGIN_SUCCESS})
}

export const loginFail = (error) => {
    return({type:LOGIN_FAIL, payload:error})
}