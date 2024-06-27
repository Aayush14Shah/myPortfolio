import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-6 ">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
      <h1 className="text-2xl font-bold tracking-wide text-indigo-600">Loading</h1>
    </div>
  );
};

export default Loading;
