'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from 'lucide-react';
import ModalMessage from '../../../components/ModalMessage';

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
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

  const handleConfirmDelete = (productId: string) => {
    setSelectedProductId(productId);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    if (!selectedProductId) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${selectedProductId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (res.ok) {
        setProducts(prev => prev.filter(p => p._id !== selectedProductId));
        setShowConfirmModal(false);
        setSelectedProductId(null);
      } else {
        const err = await res.json();
        alert(`Delete failed: ${err.message}`);
      }
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const totalUnits = products.reduce((acc, p) => acc + p.quantity, 0);
  const totalRevenue = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-400 text-white p-8">
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Product Inventory</h1>

      <Table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="text-purple-500">Product Name</TableHead>
            <TableHead className="text-purple-500">Original Price</TableHead>
            <TableHead className="text-purple-500">Units Available</TableHead>
            <TableHead className="text-purple-500">Discount (%)</TableHead>
            <TableHead className="text-purple-500">Price per Unit</TableHead>
            <TableHead className="text-purple-500">Total Value</TableHead>
            <TableHead className="text-purple-500">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => {
            const unitPrice = product.price;
            const totalValue = unitPrice * product.quantity;
            return (
              <TableRow key={product._id} className="text-center">
                <TableCell>{product.name}</TableCell>
                <TableCell>${unitPrice.toFixed(2)}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.discount ?? 0}</TableCell>
                <TableCell>${unitPrice.toFixed(2)}</TableCell>
                <TableCell>${totalValue.toFixed(2)}</TableCell>
                <TableCell className="space-x-2">
                  <Link href={`/admin/dashboard/edit/${product._id}`}>
                    <button className="px-2 py-1 rounded hover:bg-blue-500">
                      <SquarePen className="inline-block" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleConfirmDelete(product._id)}
                    className="px-2 py-1 rounded hover:bg-red-500"
                  >
                    <Trash2 className="inline-block" />
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow className="text-center font-bold">
            <TableCell colSpan={2}>Totals</TableCell>
            <TableCell>{totalUnits}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>${totalRevenue.toFixed(2)}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-900/70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg text-white max-w-sm w-full shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}