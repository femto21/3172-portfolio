import React from "react";

const Error = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-gray-300 mb-6">
        Page not found. The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
