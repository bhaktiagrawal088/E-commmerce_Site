import { children, createContext, useContext, useReducer } from "react";
import {cartReducer} from '../reducer/cartReducer'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const intialState = {
        cart : [],
        wishlist: [],
    }
    const [{cart, wishlist}, cartDispatch] = useReducer(cartReducer, intialState);
    return (
        <CartContext.Provider value={{cart,wishlist, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {CartProvider, useCart} 