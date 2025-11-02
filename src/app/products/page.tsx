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

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/vehicle")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        🚗 Vehicle Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200"
          >
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
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-blue-600 font-semibold text-lg">
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
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
