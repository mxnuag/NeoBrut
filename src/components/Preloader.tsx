// src/components/Preloader.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          {/* Rotating box effect */}
          <div className="h-16 w-16 bg-gray-800 animate-spin rounded-lg shadow-lg"></div>
          <p className="mt-4 text-lg font-bold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return null; // Return null when loading is complete
}
