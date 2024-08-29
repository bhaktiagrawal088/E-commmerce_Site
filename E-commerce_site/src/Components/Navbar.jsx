import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useLogin } from "../context/LoginContext";
import { useCart } from "../context/CartContext";
export const Navbar = () => {

  const navigate = useNavigate();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  const {token , loginDispatch, user}= useLogin();
  const {cart} = useCart()
  const {wishlist} = useCart()

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
        {wishlist.length > 0 && (
            <span className="absolute top-3 right-36 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {wishlist.length}
            </span>
        )}
        <span onClick={() => navigate('/cart')} className="material-icons-outlined text-3xl hover:cursor-pointer">shopping_cart</span>
        {cart.length > 0 && (
            <span className="absolute top-3 right-20 bg-yellow-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        <div>
            <span onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            className="material-icons-outlined text-3xl hover:cursor-pointer">account_circle</span>
            {/* {
              isAccountDropdownOpen &&  <div className="absolute bg-sky-400">
              <button onClick={onLoginClick}>
              {
                 token?.access_token ? "Logout" : "Login"
              }
              </button>
        </div>
            } */}
            {isAccountDropdownOpen && (
            <div className="absolute right-1 mt-2 p-1 rounded shadow-lg">
              {token?.access_token ? (
                <div>
                  {user?.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full mb-2"
                    />
                  ) : (
                    <div className="text-lg font-bold mb-2">{user?.name}</div>
                  )}
                  <button
                    onClick={onLoginClick}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
        
      </nav>
    </header>
  );
};
