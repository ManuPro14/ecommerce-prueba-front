'use client'

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/products' || 'http://localhost:3000/products', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  

  const handleUnitsChange = (id: number, newUnits: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, units: newUnits } : p))
    );
  };

  const handleDiscountChange = (id: number, newDiscount: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, discount: newDiscount } : p))
    );
  };

  const totalUnits = products.reduce((acc, p) => acc + p.quantity, 0);
  const totalRevenue = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-400 text-white p-8">
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Product Inventory</h1>

      <Table className="w-full max-w-7xl bg-gray-800 rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="text-purple-500">Product Name</TableHead>
            <TableHead className="text-purple-500">Original Price</TableHead>
            <TableHead className="text-purple-500">Units Available</TableHead>
            <TableHead className="text-purple-500">Discount (%)</TableHead>
            <TableHead className="text-purple-500">Price per Unit</TableHead>
            <TableHead className="text-purple-500 text-right">Total Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => {
            const unitPrice = product.price;
            const totalValue = unitPrice * product.quantity;
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${unitPrice.toFixed(2)}</TableCell>

                <TableCell>
                  <input
                    type="number"
                    min="0"
                    value={product.quantity}
                    onChange={(e) => handleUnitsChange(product.id, parseInt(e.target.value))}
                    className="w-20 p-1 bg-gray-700 rounded text-center"
                  />
                </TableCell>

                <TableCell>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={product.discount}
                    onChange={(e) => handleDiscountChange(product.id, parseInt(e.target.value))}
                    className="w-20 p-1 bg-gray-700 rounded text-center"
                  />
                </TableCell>

                <TableCell>
                  ${unitPrice.toFixed(2)}
                </TableCell>

                <TableCell className="text-right">
                  ${totalValue.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="font-bold">Totals</TableCell>
            <TableCell className="font-bold">{totalUnits}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold">${totalRevenue.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}