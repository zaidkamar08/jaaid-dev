import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = ["About", "Skills", "Projects", "Hackathons", "Contact"];

  return (
    <nav
      className={
        "fixed top-0 w-full z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent")
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <span className="text-green-400">Jaaid</span>
          <span className="text-gray-900 dark:text-white">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className="text-gray-700 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-400 transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Theme Toggle + Resume */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:scale-110 transition-transform duration-200"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 font-medium text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-300"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-400 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400 text-center font-medium text-sm"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
