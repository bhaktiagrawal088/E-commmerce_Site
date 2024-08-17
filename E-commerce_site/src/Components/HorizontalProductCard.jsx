export const HorizontalProductCart = ({ product }) => {
    return (
        <div className="flex shadow-lg rounded-lg p-4 my-4">
            <div className="relative w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden">
                <img className="object-cover w-full h-full" src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex-grow pl-4 flex flex-col justify-between">
                <div className="text-xl font-bold mb-2">{product.title}</div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">Rs. {`${product.price}0`}</p>
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
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Remove From Cart
                    </button>
                    <button className="px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-800 hover:text-white transition">
                        Move to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
