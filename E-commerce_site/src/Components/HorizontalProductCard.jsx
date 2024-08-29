import { useCart } from "../context/CartContext";

export const HorizontalProductCart = ({ product }) => {

    const {cart, wishlist , cartDispatch} = useCart();

    const removeFromCart = (product) => {
        cartDispatch({type : "REMOVE_FROM_CART", payload:  {id: product.id}})
    }

    const moveToWishlist = (product) => {
        cartDispatch({type : "MOVE_TO_WISHLIST", payload:  { product}});
        }
    console.log("Current cart:", cart); // Example of checking the state
    console.log("Current wishlist:", wishlist);

    return (
        <div className="flex shadow-lg rounded-lg p-4 my-4">
            <div className="relative w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden">
                <img className="object-cover w-full h-full" src={product.images[0]} alt={product.title || "Product Image"} />
            </div>
            <div className="flex-grow pl-4 flex flex-col justify-between">
                <div className="text-xl font-bold mb-2">{product.title}</div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">${product.price}</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm font-medium text-gray-600">Quantity:</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 border border-gray-300 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded">-</button>
                        <span className="text-lg font-bold">1</span>
                        <button className="w-8 h-8 border border-gray-300 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded">+</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => removeFromCart(product)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Remove From Cart
                    </button>
                    <button onClick={() => moveToWishlist(product)}
                    className="px-4 py-2 border border-sky-600 text-cyan-500 rounded hover:bg-sky-600 hover:text-white transition">
                        Save For Later
                    </button>
                </div>
            </div>
        </div>
    );
}
