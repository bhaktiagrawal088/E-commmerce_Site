import { useCart } from "../context/CartContext";
import { findProductInCart } from "../utils/findProductInCart";
import { findProductInWishlist } from "../utils/findProductInWishlist";
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { cart, wishlist, cartDispatch } = useCart();
  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);
  const navigate = useNavigate();

  const onCartClick = (product) => {
    if (!isProductInCart) {
      cartDispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      navigate('/cart');
    }
  };

  const onWishClick = (product) => {
     if (!isProductInWishlist) {
          cartDispatch({type: "ADD_TO_WISHLIST", payload : product});
  }else{
    cartDispatch({type: "REMOVE_FROM_WISHLIST", payload :{id :  product.id}})
  }
  };




  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full 
    max-w-xs h-98 transform transition-transform hover:scale-105">
      <div className="relative h-60">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.title || "Product Image"}
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <div className="mb-4">
          <p className="text-gray-700 text-xl font-bold">
            Rs. {product.price}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <button onClick={() => onWishClick(product)}
          className={`py-2  rounded-lg text-white ${
          isProductInWishlist ? "bg-rose-500 hover:bg-cyan-700" : "bg-cyan-800 hover:bg-cyan-700"  
          } transition`} >
          <span className="material-icons-outlined">
               {isProductInWishlist ? "favorite" : "favorite_border"}
          </span>
          {isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
          <button
            onClick={() => onCartClick(product)}
            className={`py-2 rounded-lg text-white ${
              isProductInCart ? 'bg-black hover:bg-cyan-700' : 'bg-cyan-800 hover:bg-cyan-700'
            } transition`}
          >
            <span className="material-icons-outlined">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
