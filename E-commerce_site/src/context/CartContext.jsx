import { children, createContext, useContext, useReducer } from "react";
import {cartReducer} from '../reducer/cartReducer'

const CartContext = createContext()

const CartProvider = ({children}) => {

    console.log(JSON.parse(localStorage.getItem('cart')))
    const intialState = {
        cart : JSON.parse(localStorage.getItem('cart')) || [],
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
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