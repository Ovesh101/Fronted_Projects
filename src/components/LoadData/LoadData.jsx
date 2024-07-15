import { useEffect, useState } from "react";

const LoadData = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }

   
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  // Fetch products on initial load and whenever count changes
  useEffect(() => {
    fetchProducts();
  }, [count]); // <-- Add count as a dependency here

  // Function to handle loading more products
  const loadMore = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log(products);

  // Render loading message while fetching data
  if (loading) return <div>Loading...</div>;


  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-wrap -mx-4">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.category}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-gray-900 font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">
                      ${product.price}
                    </span>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 w-full">
            No data available
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={loadMore}
          className={`bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed ${
            products.length >= 100 ? "opacity-50" : ""
          }`}
          disabled={loading || products.length >= 100}
        >
          {products.length >= 100 ? "No more data" : "Load more"}
        </button>
      </div>
    </div>
  );
};

export default LoadData;
