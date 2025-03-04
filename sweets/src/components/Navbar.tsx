import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#about"
          className="text-3xl font-bold text-primary dark:text-white font-Italianno"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll("about");
          }}
        >
          Sweet Treats
        </a>

        <div className="hidden md:flex text-xl text-white items-center space-x-8">
          <nav className="flex space-x-10">
            {["About", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text hover:font-bold transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex md:hidden">
          <button
            className="md:hidden p-2 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-50 animate-slide-down">
          <nav className="py-4 flex flex-col items-center space-y-4">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block w-full text-left py-2 px-4 hover:font-bold hover:bg-red-500 hover:text-white transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
