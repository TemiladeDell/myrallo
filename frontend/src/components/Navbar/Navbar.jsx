import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  
  const [toolsOpen, setToolsOpen] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);

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

      <div className="hidden md:flex gap-8 text-gray-700 font-medium">

  <a
    href="#"
    className="transition-all duration-300 ease-out hover:text-blue-500 hover:-translate-y-0.5"
  >
    Home
  </a>

  <div className="relative">

    <button
      onClick={() => setToolsOpen(!toolsOpen)}
      className="flex items-center gap-2 transition-all duration-300 ease-out hover:text-blue-500"
    >
      Tools

      <span
        className={`transition-transform duration-300 ${
          toolsOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>

    </button>

    <div
      className={`absolute top-full left-0 mt-3 w-60 rounded-xl bg-white shadow-xl border border-gray-200 transition-all duration-300 ease-out ${
        toolsOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        PDF Tools
      </a>

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        Image Tools
      </a>

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        Video Tools
      </a>

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        Audio Tools
      </a>

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        Developer Tools
      </a>

      <a href="#" className="block px-5 py-3 hover:bg-slate-100">
        AI Tools
      </a>

    </div>

  </div>

  <a
    href="#"
    className="transition-all duration-300 ease-out hover:text-blue-500 hover:-translate-y-0.5"
  >
    FAQ
  </a>

  <a
    href="#"
    className="transition-all duration-300 ease-out hover:text-blue-500 hover:-translate-y-0.5"
  >
    About
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

      {!showToolsMenu ? (

        <div className="flex flex-col gap-6 py-6 px-6">

          <a href="#">Home</a>

          <button
            onClick={() => setShowToolsMenu(true)}
            className="flex justify-between items-center"
          >
            <span>Tools</span>
            <span>›</span>
          </button>

          <a href="#">FAQ</a>

          <a href="#">About</a>

          <a href="#">How to use</a>

        </div>

      ) : (

        <div className="flex flex-col gap-6 py-6 px-6">

          <button
            onClick={() => setShowToolsMenu(false)}
            className="flex items-center gap-2 font-semibold"
          >
            ← Back
          </button>

          <a href="#">PDF Tools</a>

          <a href="#">Image Tools</a>

          <a href="#">Video Tools</a>

          <a href="#">Audio Tools</a>

          <a href="#">Developer Tools</a>

          <a href="#">AI Tools</a>

        </div>

      )}

    </div>
  )
}
</>      
  );
  
}


export default Navbar;