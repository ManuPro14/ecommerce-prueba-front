'use client'

import React from 'react';

export default function Testimonials() {
  return (
    <section className="bg-gray-200 py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">What our customers say</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"These sneakers are the best! Super comfy and stylish."</p>
          <p className="text-purple-600 mt-4 font-bold">— John Doe</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Fast delivery and amazing customer service. 10/10!"</p>
          <p className="text-purple-600 mt-4 font-bold">— Jane Smith</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Love the promotions and variety of sneakers!"</p>
          <p className="text-purple-600 mt-4 font-bold">— Alex Johnson</p>
        </div>
      </div>
    </section>
  );
}