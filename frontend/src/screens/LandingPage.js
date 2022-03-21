import React from "react";

const LandingPage = () => {
  return (
    // <div className="bg-[url('https://source.unsplash.com/random/?study')] h-screen bg-cover bg-opacity-100">
    <div className="bg-lp-backgroundimg bg-center h-screen bg-cover text-center">
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-white/60">
        <div className="my-10 text-3xl md:text-6xl lg:8xl">Welcome to Diary App</div>
        <button className="my-2 w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="my-2 w-28 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Signup
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
