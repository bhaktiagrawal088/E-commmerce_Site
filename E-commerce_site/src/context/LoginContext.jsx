import { children, createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";

const LoginContext = createContext()

const LoginProvider = ({children}) => { 
    const intialState = {
        email : "",
        password : "",
        token : {access_token : localStorage.getItem('token') || "" , refrence_token: ""},
    }
    const [{email, password, token}, loginDispatch] = useReducer(loginReducer, intialState);
    return (
        <LoginContext.Provider value={{email, password, token, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext)

export {LoginProvider, useLogin} 