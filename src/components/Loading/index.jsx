import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="text-center">
        <div className="h-16 w-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-4 text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading