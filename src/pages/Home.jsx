import React from "react";

function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-black border-2 border-red-300 rounded-full flex items-center justify-center shadow-xl overflow-hidden transition-transform duration-500 ease-in-out hover:rotate-12">
            <img
              src="/Profile.png"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            ></img>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-7 transition-all duration-700 ease-in-out transform hover:text-red-300 hover:translate-y-2">
          Eunice Sta.Romana
        </h1>
        <p className="text-2xl text-white transition-all duration-700 ease-in-out transform hover:translate-y-1">
          Aspiring Student Creative Developer
        </p>
      </div>
    </div>
  );
}

export default Home;
