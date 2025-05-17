'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok && data.access_token) {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('token', data.access_token);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg flex flex-col gap-4 w-96"
      >
        <h1 className="text-3xl text-purple-500 font-bold text-center">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-600 text-white py-2 rounded font-semibold"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default AdminLogin