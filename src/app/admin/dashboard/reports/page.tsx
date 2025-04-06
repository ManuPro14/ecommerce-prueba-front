'use client'

import React from 'react';

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Sales Reports</h1>
      <div className="bg-gray-800 p-6 rounded-lg text-white">
        <p>Total Sales: $5,000</p>
        <p>Products Sold: 200</p>
        <p>Top Seller: Running Sneakers</p>
      </div>
    </div>
  );
}