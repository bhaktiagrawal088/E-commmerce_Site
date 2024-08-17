import { Navbar } from "../Components/Navbar"
import { useEffect, useState } from "react"
import { getAllProducts } from "../API/getAllProducts"
import { ProductCard } from "../Components/ProductCard"

import { useCart } from "../context/CartContext"



export const Home = () => {

    const [products , setProducts] = useState([])

    const {cart} = useCart()

    console.log(cart)

    // useEffect(() => { 
    //     (async () => {
    //     const data = await getAllProducts();
    //     setProducts(data)

    //     })
    // } , [])

    useEffect(() => { 
        (async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                setError("Failed to fetch products");
            }
        })();
    }, []);

    return (
        <>
            <Navbar/>
            <main className="flex flex-wrap gap-8 justify-center pt-8">
                {products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </main>
        </>
    )
}