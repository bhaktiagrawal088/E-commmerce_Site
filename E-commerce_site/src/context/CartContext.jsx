import { Children, createContext, useContext, useReducer } from "react";
import {cartReducer} from '../reducer/cartReducer'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const intialState = {
        cart : [],
    }
    const [{cart}, cartDispatch] = useReducer(cartReducer, intialState);
    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {CartProvider, useCart} 