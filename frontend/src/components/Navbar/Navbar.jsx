import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white px-8 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <a href="#">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
        <a href="#">
        <h2 className="text-2xl font-bold text-blue-600">
        Myrallo
        </h2>
        </a>
      </div>

      <div className="hidden md:flex gap-8 text-gray-700 font-medium ">
        <a href="#" className="transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5">
          Home
        </a>
        <a href="#" className="transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5">
          Tools
        </a>
        <a href="#" className="transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5">
          FAQ
        </a>
        <a href="#" className="transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5">
          About
        </a>
        <a href="#" className="transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5">
          How to use
        </a>
      </div>

      <div className="flex items-center gap-4">

        <button className="text-xl">
    <     img src={search} alt="Search" className="h-6 w-6" />
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>

      </div>
    </nav>
    {
  menuOpen && (
    <div className="fixed top-20 left-0 z-50 w-full bg-white shadow-md md:hidden">
      <div className="flex flex-col items-center gap-6 py-6">

        <a href="#">Home</a>
        <a href="#">Tools</a>
        <a href="#">FAQ</a>
        <a href="#">About</a>
        <a href="#">How to use</a>

      </div>
    </div>
  )
}
</>      
  );
  
}


export default Navbar;