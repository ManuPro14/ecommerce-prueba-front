'use client'

import React from 'react';

export default function BenefitsSection() {
  return (
    <section className="bg-gray-800 text-white rounded-4xl py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
        {/* Beneficio 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-purple-400 text-lg md:text-xl font-bold mb-2">🚚 Free Shipping</h3>
          <p className="text-gray-300 text-sm md:text-base">On orders over $99</p>
        </div>

        {/* Beneficio 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-purple-400 text-lg md:text-xl font-bold mb-2">💸 Best Prices</h3>
          <p className="text-gray-300 text-sm md:text-base">Amazing deals everyday</p>
        </div>

        {/* Beneficio 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-purple-400 text-lg md:text-xl font-bold mb-2">🛡️ Secure Payments</h3>
          <p className="text-gray-300 text-sm md:text-base">Safe & encrypted checkout</p>
        </div>

        {/* Beneficio 4 */}
        <div className="flex flex-col items-center">
          <h3 className="text-purple-400 text-lg md:text-xl font-bold mb-2">📞 24/7 Support</h3>
          <p className="text-gray-300 text-sm md:text-base">Here to help anytime</p>
        </div>
      </div>
    </section>
  );
}