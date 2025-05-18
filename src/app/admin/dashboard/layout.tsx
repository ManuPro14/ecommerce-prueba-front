'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ClipboardMinus, CirclePlus, FolderKanban, ShieldUser, LogOut } from 'lucide-react';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin'); // elimina sesión
    router.push('/'); // redirige al home
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col space-y-6 justify-start">
        <h2 className="text-2xl text-purple-500 font-bold mb-8 text-center">
          <ShieldUser className="inline-block mr-2" />
          Admin Panel
        </h2>
        <nav className="flex flex-col gap-4">
          <Link href="/admin/dashboard/inventory" className="text-gray-300 hover:text-purple-400">
            <FolderKanban className="inline-block mr-2" />  
            Inventory
          </Link>
          <Link href="/admin/dashboard/add-product" className="text-gray-300 hover:text-purple-400">
            <CirclePlus className="inline-block mr-2" />
            Add Product
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-12 flex items-end justify-start gap-2 text-red-500 hover:text-red-400 font-semibold"
        >
          <LogOut className="inline-block" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-400 p-8">
        {children}
      </main>
    </div>
  );
}