import { useCart } from "../context/CartContext"
import { getProductTotalAmount } from "../utils/getProductTotalAmount";
export const PriceDetails = () => {

    const {cart} = useCart();

    const totalCartAmount = getProductTotalAmount(cart);

    const deliveryCharge = 49;
    
    return (
        <div className="w-[400px] bg-[#fafafa] p-4"> 
            <p className="text-2xl border-b p-2">Order Summary</p>
            <div className="flex flex-col gap-5 border-b p-2">
                <div className="flex">
                    <p>Price ({cart.length}) items</p>
                    <p className="ml-auto">Rs. {totalCartAmount}</p>
                </div>
                <div className="flex">
                    <p>Delivery Charge</p>
                    <p className="ml-auto">Rs. {deliveryCharge}</p>
                </div>
            </div>
            <div className="flex border-b p-2 bold">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. {totalCartAmount + deliveryCharge}</p>
            </div>
            <div className="p-2">
                <button  className="button bg-orange-400 btn-icon cart-btn d-flex align-center justify-center
                gap cursor btn-margin">Continue</button>
                
            </div>
        </div>
    )
}