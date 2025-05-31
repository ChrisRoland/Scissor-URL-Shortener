import { ChevronDown } from 'lucide-react';
import logo from '../assets/media/SciLogo.png';

export default function NavBar() {
  return (
    <header className="">
      <nav className="flex justify-between items-center px-[90px] py-[20px]">
        <div className="flex justify-center items-center gap-[5px] text-[24px] font-semibold text-[#0065FE]">
          <img src={logo} alt="Logo" className="h-6 w-6" /> <span className='font-normal'> | </span> SCISSOR
        </div>
        <ul className="flex list-none gap-[40px]">
          <li><a href="#" className="active decoration-0 text-[#0065fe]">My URLs</a></li>
          <li className="">
            <a href="#" className="decoration-0 text-black flex justify-center items-center gap-[2px]">Features <ChevronDown size={18}/></a>
          </li>
          <li><a href="#" className="decoration-0 text-black">Pricing</a></li>
          <li><a href="#" className="decoration-0 text-black">Analytics</a></li>
          <li><a href="#" className="decoration-0 text-black">FAQs</a></li>
        </ul>
        <div className="flex justify-center items-center gap-[20px]">
          <a href="#" className="decoration-0 text-[#007bff]">Log in</a>
          <button className="btn btn-primary">Try for free</button>
        </div>
      </nav>
    </header>
  );
}