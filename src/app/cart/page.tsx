'use client'

import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

const dummyCart = [
  { id: 1, name: 'Running Sneakers', price: 89.99, quantity: 2 },
  { id: 2, name: 'Stylish Sneakers', price: 79.99, quantity: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState(dummyCart);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Si llega a 0, lo elimina
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-400 p-8 text-white">
      {/* Header Flecha + Título juntos */}
      <div className="w-full max-w-4xl flex items-center justify-start gap-4 mb-8 cursor-pointer text-purple-700 font-bold" onClick={() => window.history.back()}>
        <ArrowLeft className="inline-block" width={30} height={30} />
        <h1 className="text-3xl">Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-300 text-lg">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between bg-gray-800 p-6 rounded-lg shadow-md gap-4"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-purple-700 hover:bg-purple-600 p-1 rounded"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="bg-purple-700 hover:bg-purple-600 p-1 rounded"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <p className="text-gray-300">Price per item: <span className="font-bold">${item.price.toFixed(2)}</span></p>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-400">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center bg-purple-700 p-4 rounded-lg mt-8">
            <h2 className="text-2xl font-bold">Total:</h2>
            <span className="text-3xl font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}