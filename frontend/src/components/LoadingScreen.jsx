import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#3d348b]">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#f7b801] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-[#f7b801] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-[#f7b801] rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
