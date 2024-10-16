// src/app/ClientComponent.tsx
'use client';

import { useEffect, useState } from 'react';

const ClientComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="flex flex-col items-center">
            {/* Rotating boxes */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-16 w-16 bg-gray-800 animate-spin rounded-lg shadow-lg transform transition-transform duration-1000"
                  style={{ animationDelay: `${index * 250}ms` }} // Delay for staggered effect
                />
              ))}
            </div>
            <p className="mt-6 text-lg font-semibold text-gray-800">Loading...</p>
            <p className="text-sm text-gray-600">Please wait while we prepare your experience.</p>
          </div>
        </div>
      ) : (
        <div className="transition-opacity duration-500 ease-in-out opacity-100">
          {/* This will ensure smooth transition of your children content */}
        </div>
      )}
    </>
  );
};

export default ClientComponent;
