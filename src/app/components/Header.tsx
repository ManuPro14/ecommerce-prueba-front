'use client'

import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center h-20 bg-gray-900'>
      <h1 className='text-purple-400 text-4xl font-bold border-b-2 border-purple-400 mb-4 ml-8'>Ecommerce</h1>
      <button onClick={() => window.location.href = '/products'} className='bg-purple-600 hover:bg-purple-500/80 hover:scale-105 text-white px-6 py-2 rounded-full text-sm font-semibold mr-8 flex items-center cursor-pointer  transition duration-300 ease-in-out'>
        <span className='text-white text-lg font-semibold'>Go to Products</span>
      </button>
    </header>
  )
}

export default Header
