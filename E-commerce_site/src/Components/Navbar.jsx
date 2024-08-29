import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useLogin } from "../context/LoginContext";
import { useCart } from "../context/CartContext";
export const Navbar = () => {

  const navigate = useNavigate();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  const {token , loginDispatch}= useLogin();
  const {cart} = useCart()

  const onLoginClick = () =>{
    if(!token?.access_token){
      navigate('/auth/login') 
    } else{
      loginDispatch({
        type: 'LOGOUT',
      })
      navigate('/auth/login')
    }
  }

  return (
    <header className="flex bg-cyan-900 items-center py-4 px-8 text-slate-50">
      <div className="flex">
        <h1 onClick={() => navigate('/')} className="text-3xl hover:cursor-pointer">Shop It</h1>
      </div>
      <nav className="flex ml-auto gap-8 ">
        <span onClick={() => navigate('/wishlist')} className="material-icons-outlined text-3xl hover:cursor-pointer ">favorite</span>
        <span onClick={() => navigate('/cart')} className="material-icons-outlined text-3xl hover:cursor-pointer">shopping_cart</span>
        <span>{cart.length}</span>
        <div>
            <span onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            className="material-icons-outlined text-3xl hover:cursor-pointer">account_circle</span>
            {
              isAccountDropdownOpen &&  <div className="absolute bg-sky-400">
              <button onClick={onLoginClick}>
              {
                 token?.access_token ? "Logout" : "Login"
              }
              </button>
        </div>
            }
        </div>
        
      </nav>
    </header>
  );
};
