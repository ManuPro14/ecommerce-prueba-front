'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ModalMessage from '../../../../components/ModalMessage';

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setName(data.name);
        setDescription(data.description);
        setSku(data.sku);
        setQuantity(data.quantity.toString());
        setPrice(data.price.toString());       
        setImageUrl(data.image);
        setCategory(data.category);
      } else {
        console.error('Failed to fetch product');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (id) fetchProduct();
}, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      description,
      sku,
      quantity: Number(quantity),
      price: Number(price),
      image: imageUrl,
      category,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedProduct),
      });

      if (res.ok) {
        setShowModal(true);
      } else {
        const errorData = await res.json();
        alert(`Error updating product: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full text-white p-4">
      <h1 className="text-3xl text-purple-700 font-bold mb-8">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <p>Product Name</p>
        <input type="text" placeholder="Product Name" className="p-2 rounded bg-gray-700 text-white" value={name} onChange={(e) => setName(e.target.value)} required />
        <p>Description</p>
        <input type="text" placeholder="Description" className="p-2 rounded bg-gray-700 text-white" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <p>SKU</p>
        <input type="text" placeholder="SKU" className="p-2 rounded bg-gray-700 text-white" value={sku} onChange={(e) => setSku(e.target.value)} required />
        <p>Quantity</p>
        <input type="number" placeholder="Quantity" className="p-2 rounded bg-gray-700 text-white" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <p>Price</p>
        <input type="number" placeholder="Price" className="p-2 rounded bg-gray-700 text-white" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <p>Category</p>
        <input type="text" placeholder="Category" className="p-2 rounded bg-gray-700 text-white" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <p>Image URL</p>
        <input type="text" placeholder="Image URL" className="p-2 rounded bg-gray-700 text-white" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />

        {imageUrl && (
          <div className="flex justify-center mt-4">
            <img src={imageUrl} alt="Product Preview" className="w-64 h-64 object-cover rounded-lg border-2 border-purple-500" />
          </div>
        )}

        <button type="submit" className="bg-purple-700 hover:bg-purple-600 text-white py-2 rounded font-semibold mt-4">
          Update Product
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-400/70 flex items-center justify-center z-50">
          <ModalMessage
            title="Producto actualizado"
            text="El producto se ha actualizado correctamente."
            onClose={() => {
              setShowModal(false);
              router.push('/admin/dashboard/inventory');
            }}
          />
        </div>
      )}
    </div>
  );
}