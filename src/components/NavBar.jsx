import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/media/SciLogo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar flex justify-between items-center px-4 py-4 md:px-[90px] md:py-[20px]">
        <div className="logo flex items-center gap-[5px] text-[24px] font-semibold text-[#0065FE]">
          <img src={logo} alt="Logo" className="h-6 w-6" />
          <span className="font-normal"> | </span>
          <span>SCISSOR</span>
        </div>

        {/* menu button on mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="max-sm:hidden nav-links flex list-none gap-[40px]">
          <li>
            <a href="#" className="active decoration-0 text-[#0065fe]">
              My URLs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="decoration-0 text-black flex items-center gap-[2px]"
            >
              Features <ChevronDown size={18} />
            </a>
          </li>
          <li>
            <a href="#" className="decoration-0 text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="decoration-0 text-black">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="decoration-0 text-black">
              FAQs
            </a>
          </li>
        </ul>

        <div className="hidden md:flex md:items-center">
          <div className="auth-buttons flex items-center gap-[20px] ml-[40px]">
            <a href="#" className="login decoration-0 text-[#007bff]">
              Log in
            </a>
            <button className="btn btn-primary">Try for free</button>
          </div>
        </div>

        {/* Mobile nav*/}
        <div
          className={`
            md:hidden 
            w-[95%] mx-auto absolute top-4 left-0 right-0 
            bg-white shadow-lg p-4 rounded-xl z-40

            transform transition-transform duration-300 ease-out
            ${
              isMenuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-10 opacity-0 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col space-y-4 mt-5">
            <li>
              <a href="#" className="block py-2 text-[#0065fe]">
                My URLs
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-black">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-black">
                FAQs
              </a>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <a href="#" className="block py-2 text-[#007bff] mb-2">
              Log in
            </a>
            <button className="btn btn-primary w-full">Try for free</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
