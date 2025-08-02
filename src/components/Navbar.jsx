import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-black shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/images/logo-LM.png"
              alt="My Logo"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 px-1 transition-transform hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black z-40 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-16"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white text-xl font-medium uppercase tracking-wider transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
