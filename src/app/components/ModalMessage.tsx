'use client'

import React from 'react';

interface ModalMessageProps {
  title: string;
  text: string;
  onClose: () => void;
}

export default function ModalMessage({ title, text, onClose }: ModalMessageProps) {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{text}</p>
        <button
          onClick={onClose}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}