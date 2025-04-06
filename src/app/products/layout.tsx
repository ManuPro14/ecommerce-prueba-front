'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, ArrowLeft } from 'lucide-react';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const [price, setPrice] = useState(200);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-400 relative overflow-x-hidden">

      {/* Botón Filters / Arrow */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`
          fixed top-6 ${showSidebar ? 'left-64 -translate-x-1/2' : 'left-6'} 
          z-50 flex items-center justify-center bg-purple-700 hover:bg-purple-600
          text-white font-semibold rounded-full
          transition-all duration-300 ease-in-out
          ${showSidebar ? 'w-12 h-12' : 'px-4 py-2'}
        `}
      >
        {showSidebar ? <ArrowLeft size={24} /> : (
          <>
            <SlidersHorizontal size={20} />
            <span className="ml-2  sm:inline">Filters</span>
          </>
        )}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col justify-between p-6 shadow-lg
        transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex
        z-40
      `}>
        {/* Filters Section */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-purple-500 text-center">Filters</h2>

          {/* Price Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Price Range</label>
            <input
              type="range"
              min="0"
              max="200"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="accent-purple-500"
            />
            <p className="text-xs text-gray-400 text-center">Up to ${price}</p>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Category</h3>
            <div className="flex flex-col gap-1 pl-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Casual</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Deportivo</span>
              </label>
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Gender</h3>
            <div className="flex flex-col gap-1 pl-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Promotion */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Promotion</h3>
            <div className="flex flex-col gap-1 pl-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>On Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>No Sale</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <Link
            href="/"
            className="text-purple-400 text-center block hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Fondo difuminado */}
      {showSidebar && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-30 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-10 z-10">
        {children}
      </main>
    </div>
  );
}