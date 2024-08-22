import { children, createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";

const LoginContext = createContext()

const LoginProvider = ({children}) => { 
    const intialState = {
        email : "",
        password : "",
        token : ""
    }
    const [{email, password}, loginDispatch] = useReducer(loginReducer, intialState);
    return (
        <LoginContext.Provider value={{email, password, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext)

export {LoginProvider, useLogin} 