import logo from '../assets/media/SciLogo.png';

export default function NavBar() {
  return (
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <img src={logo} alt="Logo" className="h-6 w-6" />|
          SCISSOR
        </div>
        <ul className="hidden md:flex gap-8 text-gray-800">
          <li><a href="#" className="text-blue-600">My URLs</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
        <div className="hidden md:flex gap-4">
          <a href="#" className="text-blue-600">Log in</a>
          <button className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Try for free
          </button>
        </div>
      </nav>
    </header>
    );
}