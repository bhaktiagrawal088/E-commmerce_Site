import {Navbar} from '../Components/Navbar'
import { useCart } from '../context/CartContext'
import { HorizontalProductCart } from '../Components/HorizontalProductCard'
export const Cart = () => {

    const {cart} = useCart();
    return (
        <>
            <Navbar/>
            <main className='flex flex-col items-center pt-6'>
                <h2 className='text-3xl'>My Cart</h2>
                <div className='pt-4 flex flex-col gap-4'>
                {
                    cart?.length > 0 ?cart.map(product => <HorizontalProductCart key={product.id} 
                    product={product} />) : <p>Cart is empty, add product</p>
                }
                </div>
               
            </main>
        </>

    )
}