import { useCart } from "../context/CartContext";
import { findProductInCart } from "../utils/findProductInCart";
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const isProductInCart = findProductInCart(cart, product.id);
  const navigate = useNavigate();

  const onCartClick = (product) => {
    if (!isProductInCart) {
      cartDispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      navigate('/cart');
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
            Rs. {`${product.price}0`}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <button className="bg-green-800 text-white rounded-lg py-2 hover:bg-green-700 transition">
            <span className="material-icons-outlined">favorite</span>
            Add To Wishlist
          </button>
          <button
            onClick={() => onCartClick(product)}
            className={`py-2 rounded-lg text-white ${
              isProductInCart ? 'bg-green-800 hover:bg-green-700' : 'bg-green-800 hover:bg-green-700'
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
