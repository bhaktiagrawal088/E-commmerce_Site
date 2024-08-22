import { Navbar } from "../Components/Navbar";
import { ProductCard } from "../Components/ProductCard";
import { useCart } from "../context/CartContext";

export const Wishlist = () => {
  const { wishlist } = useCart();
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6 ">
        <h2 className="text-3xl mb-4 font-bold">My Wishlist</h2>
        <div className="flex gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-ful">
            {wishlist?.length > 0 &&
              wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};
