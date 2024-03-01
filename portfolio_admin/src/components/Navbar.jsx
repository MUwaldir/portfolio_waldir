// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between bg-gray-800 shadow-lg px-4 py-2 w-full" >
      <div className="container mx-auto flex justify-between">
        <h1 className=" text-white text-xl font-semibold">Administración Portfolio</h1>
        <h2 className='text-white' >clase</h2>
      </div>
    </nav>
  );
};

export default Navbar;
