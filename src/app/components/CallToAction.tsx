'use client'

import React from 'react';
import Link from 'next/link';

function CallToAction() {
  return (
    <section className="w-full bg-gray-800 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-6">
        Find Your Perfect Sneakers
      </h2>
      <p className="text-gray-300 text-lg max-w-xl mb-8">
        Explore our latest collection of sneakers with exclusive discounts. Step up your style today!
      </p>
      <Link href="/products" legacyBehavior>
        <a className="px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-full text-lg font-semibold transition">
          Shop Now
        </a>
      </Link>
    </section>
  );
}

export default CallToAction;