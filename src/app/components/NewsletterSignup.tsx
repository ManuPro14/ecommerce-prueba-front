'use client'

import React from 'react';

export default function NewsletterSignup() {
  return (
    <section className="w-full h-auto flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-purple-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold">
          📧 Stay updated with our latest deals
        </h2>
        <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-md text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}