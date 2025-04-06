'use client'

import Image from 'next/image';
import React, { useState } from 'react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New product:', { name, price, imageUrl });
    alert('Product added successfully (simulated)');
    setName('');
    setPrice('');
    setImageUrl('');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full text-white p-4">
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Add New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Product Name"
          className="p-2 rounded bg-gray-700 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="p-2 rounded bg-gray-700 text-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="p-2 rounded bg-gray-700 text-white"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {/* Previsualización de la imagen */}
        {imageUrl && (
          <div className="flex justify-center mt-4">
            <Image
              src={imageUrl}
              alt="Product Preview"
              className="w-64 h-64 object-cover rounded-lg border-2 border-purple-500"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-600 text-white py-2 rounded font-semibold mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}