'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  { id: 1, name: 'Running Sneakers', price: 71.99, image: '/img/heroimg1.png' },
  { id: 2, name: 'Stylish Sneakers', price: 79.99, image: '/img/heroimg2.png' },
  { id: 3, name: 'Pro Running Sneakers', price: 103.99, image: '/img/heroimg1.png' },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 bg-gray-300">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">Featured Sneakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition">
            <Image src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-6" width={400} height={400} />
            <h3 className="text-xl font-semibold text-purple-400">{product.name}</h3>
            <p className="text-gray-300 my-2 text-lg">${product.price}</p>
            <Link href="/products" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mt-4 inline-block">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}