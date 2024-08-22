import { Navbar } from "../Components/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../API/getAllProducts";
import { ProductCard } from "../Components/ProductCard";
import { useCart } from "../context/CartContext";
import { getAllCategories } from "../API/getAllcategories";
import { getProductByCategory } from "../utils/getProductByCategory";
import { PriceSlider } from "../Components/PriceSlider";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("");

  const { cart } = useCart();

  console.log(cart);

  useEffect(() => {
    (async () => {
      try {
        const products = await getAllProducts();
        const categories = await getAllCategories();
        const updateCategories = [...categories, { id: "1a", name: "All" }];
        setProducts(products);
        setCategories(updateCategories);
      } catch (error) {
        console.error("Failed to fetch products and categories:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [priceRange, sortOrder, products]);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterByCategories = getProductByCategory(products, selectedCategory);
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="flex gap-4 justify-center mb-8">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                key={category.id}
                className="bg-cyan-600 font-semibold rounded p-2
                            hover:cursor-pointer"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className="flex flex-col">
          <PriceSlider
            min={0}
            max={Math.max(...products.map((product) => product.price))}
            onChange={setPriceRange}
          />
          <div className="flex flex-row gap-4 mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSortOrder("low-to-high")}
            >
              Low to High
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSortOrder("high-to-low")}
            >
              High to Low
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center pt-8">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2>No products available. Please try another category</h2>
          )}
        </div>
      </main>
    </>
  );
};
