'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password');
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
          type="text"
          placeholder="Username"
          className="p-2 rounded bg-gray-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default AdminLogin;