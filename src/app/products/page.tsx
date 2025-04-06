'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '@/app/components/ProductCard';
import { productsData } from './products';

export default function ProductsPage() {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [price, setPrice] = useState(200);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPromotion, setSelectedPromotion] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('');

  const filterProducts = useCallback(() => {
    let result = [...products];

    result = result.filter(p => p.price <= price);

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedGenders.length > 0) {
      result = result.filter(p => selectedGenders.includes(p.gender));
    }

    if (selectedPromotion === 'Promotion') {
      result = result.filter(p => p.promotion);
    } else if (selectedPromotion === 'No Promotion') {
      result = result.filter(p => !p.promotion);
    }

    if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setFilteredProducts(result);
  }, [products, price, selectedCategories, selectedGenders, selectedPromotion, sortOption]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 max-w-7xl mx-auto my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 text-center md:text-start">
          Our Products
        </h1>

        <Link
          href="/cart"
          className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full font-semibold flex gap-2 items-center justify-center md:justify-start"
        >
          Go to Cart
          <ShoppingCart width={20} height={20} />
        </Link>
      </div>

      {/* Ordenamiento */}
      <div className="flex justify-end max-w-7xl mx-auto mb-6 px-4 md:px-0">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="">Sort by</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
          <option value="alphabetical">Alphabetical (A-Z)</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}