'use client'

import Image from 'next/image';
import React from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender?: string;
  promotion?: boolean;
  createdAt: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const discountedPrice = (product.price * 0.8).toFixed(2); // 20% descuento

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex flex-col justify-between max-h-screen-md">
      <Image
        src={product.image || '/placeholder-product.jpg'}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-48 object-contain bg-gray-700"
        placeholder="blur"
        blurDataURL="/placeholder-blur.jpg"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/placeholder-product.jpg';
        }}
      />

      <div className="flex flex-col flex-1 justify-between p-6 text-center items-center">
        <div>
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">{product.name}</h2>

          {/* Precios */}
          <div className="flex flex-col items-center min-h-[48px] mb-4">
            {product.promotion ? (
              <>
                <p className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</p>
                <p className="text-green-400 text-lg font-bold">${discountedPrice}</p>
              </>
            ) : (
              <>
                {/* Para que ocupe mismo espacio aunque no haya promo */}
                <p className="text-transparent line-through text-sm select-none">.</p>
                <p className="text-gray-300 text-lg font-semibold">${product.price.toFixed(2)}</p>
              </>
            )}
          </div>
        </div>

        <button className="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-full text-sm font-semibold transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}