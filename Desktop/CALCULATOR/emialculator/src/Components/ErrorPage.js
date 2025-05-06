import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        Something went wrong in the application.
      </h1>
      <button
        onClick={() => navigate('/')}
        className="border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition"
      >
        GO HOME
      </button>
    </div>
  );
}
