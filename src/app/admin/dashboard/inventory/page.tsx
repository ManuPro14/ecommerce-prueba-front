'use client'

import React, { useState } from 'react';
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

const initialProducts = [
  { id: 1, name: 'Running Sneakers', price: 89.99, units: 25, discount: 0 },
  { id: 2, name: 'Stylish Sneakers', price: 79.99, units: 18, discount: 0 },
  { id: 3, name: 'Sport Sneakers', price: 99.99, units: 40, discount: 0 },
];

export default function InventoryPage() {
  const [products, setProducts] = useState(initialProducts);

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

  const totalUnits = products.reduce((acc, p) => acc + p.units, 0);
  const totalRevenue = products.reduce((acc, p) => acc + (p.price * (1 - p.discount / 100)) * p.units, 0);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-400 text-white p-8">
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Product Inventory</h1>

      <Table className="w-full max-w-7xl bg-gray-800 rounded-lg overflow-hidden">
        <TableCaption className="text-gray-300">Manage your products easily.</TableCaption>
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
            const discountedPrice = product.price * (1 - product.discount / 100);
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>

                <TableCell>
                  <input
                    type="number"
                    min="0"
                    value={product.units}
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
                  ${discountedPrice.toFixed(2)}
                </TableCell>

                <TableCell className="text-right">
                  ${(discountedPrice * product.units).toFixed(2)}
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