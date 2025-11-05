"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const [vehicleRes, motorcycleRes] = await Promise.all([
          fetch("https://dummyjson.com/products/category/vehicle"),
          fetch("https://dummyjson.com/products/category/motorcycle"),
        ]);

        const vehicleData = await vehicleRes.json();
        const motorcycleData = await motorcycleRes.json();

        // Gabungkan dua kategori
        const combined = [...vehicleData.products, ...motorcycleData.products];

        setProducts(combined);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter berdasarkan pencarian
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        🚘 Vehicle & Motorcycle Products
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search vehicle or motorcycle..."
          className="border border-gray-700 bg-gray-900 px-4 py-2 rounded-xl w-full md:w-1/2 shadow-sm focus:ring-2 focus:ring-green-500 outline-none text-white placeholder-gray-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 rounded-2xl shadow-md overflow-hidden transition-transform duration-200 border border-gray-800 hover:border-gray-700"
          >
            <a href={`/products/${product.id}`}>
              <div className="relative w-full h-56 md:h-60">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-48">
                <div>
                  <h2 className="text-lg font-semibold text-white truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-green-400 font-semibold text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-400 ${
                          i < Math.round(product.rating)
                            ? "opacity-100"
                            : "opacity-40"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-400">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
