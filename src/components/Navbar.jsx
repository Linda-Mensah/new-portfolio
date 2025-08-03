import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/images/logo-LM.png"
                alt="My Logo"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-teal-700 transition-transform hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white/90 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors relative group"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-700 transition-all duration-300 ${
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
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
          <div className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white/90 hover:text-white text-xl font-medium uppercase tracking-wider transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
