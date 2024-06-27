import React from "react";

const BluryBackgroundShape = () => {
  return (
    <div className="relative">
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full top-0 left-20 mix-blend-multiply filter blur-2xl opacity-70 animate-blur"></div>
      <div className="absolute w-[300px] h-[300px] bg-violet-300 rounded-full top-0 right-10 mix-blend-multiply filter blur-2xl opacity-70 animate-blur animation-delay-2000"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-300 rounded-full top-8 left-12 mix-blend-multiply filter blur-2xl opacity-70 animate-blur animation-delay-4000"></div>
    </div>
  );
};

export default BluryBackgroundShape;
