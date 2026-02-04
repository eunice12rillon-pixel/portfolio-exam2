import React from "react";

function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-black border-2 border-red-300 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="/Profile.png" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-7">Nesxiss</h1>
        <p className="text-2xl text-white">
          Aspiring Student Creative Developer
        </p>
      </div>
    </div>
  );
}

export default Home;
