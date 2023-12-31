import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/form">
          <button className='bg-[#5C8374] hover:bg-[#9cc0b2] text-white font-bold py-2 px-4 rounded-full mt-10'>
            Get Started
          </button>
    </Link>
  );
}

export default Home;
