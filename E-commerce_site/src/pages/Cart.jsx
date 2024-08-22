import { Navbar } from "../Components/Navbar";
import { useCart } from "../context/CartContext";
import { HorizontalProductCart } from "../Components/HorizontalProductCard";
import { PriceDetails } from "../Components/PriceDetails";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6 ">
      {
        cart?.length> 0 ? (
          <>
      <h2 className="text-3xl font-bold">My Cart</h2>
        <div className="flex gap-8">
          <div className="pt-2 flex flex-col gap-1">
            {cart?.length > 0 &&
              cart.map((product) => (
                <HorizontalProductCart key={product.id} product={product} />
              ))}
          </div>
          <div>
            <PriceDetails/>
          </div>
        </div>
      </>
        ) : <div>
          <h2 className="text-3xl">Cart is empty</h2>
          <p className="text-[bg-sky-400] hover :cursor-pointer  underline" onClick={() => navigate("/")}>Add item to cart</p>
        </div>
      }

      </main>
    </>
  );
};
