"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Review {
  rating: number;
  comment: string;
  reviewerName: string;
  date: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
  images: string[];
  reviews: Review[];
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-gray-400">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 md:px-10 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Image & Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="relative w-full h-80 md:h-96 bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
            <Image
              src={selectedImage ?? product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === img ? "border-green-500" : "border-gray-700"
                }`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-gray-400">{product.description}</p>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-green-400">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              $
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
            <span className="text-green-400 text-sm font-medium">
              -{product.discountPercentage}%
            </span>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 ${
                  i < Math.round(product.rating) ? "opacity-100" : "opacity-40"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-300">
              {product.rating.toFixed(1)} / 5
            </span>
          </div>

          <div className="space-y-1 text-gray-400 text-sm">
            <p>
              <span className="font-medium text-white">Brand:</span>{" "}
              {product.brand}
            </p>
            <p>
              <span className="font-medium text-white">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-medium text-white">Warranty:</span>{" "}
              {product.warrantyInformation}
            </p>
            <p>
              <span className="font-medium text-white">Shipping:</span>{" "}
              {product.shippingInformation}
            </p>
            <p>
              <span className="font-medium text-white">Return Policy:</span>{" "}
              {product.returnPolicy}
            </p>
            <p>
              <span className="font-medium text-white">Stock:</span>{" "}
              {product.stock} available
            </p>
            <p>
              <span className="font-medium text-white">Minimum Order:</span>{" "}
              {product.minimumOrderQuantity}
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 text-black rounded-xl mt-4 shadow-md hover:bg-green-400 transition font-semibold"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Customer Reviews</h2>

        {product.reviews?.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-white">
                    {review.reviewerName}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-400 ${
                          i < Math.round(review.rating)
                            ? "opacity-100"
                            : "opacity-40"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">No reviews yet.</p>
        )}
      </motion.div>
    </div>
  );
}
