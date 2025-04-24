import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-georgia-wine/95 shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-georgia-wine dark:text-georgia-cream">
            სუფრა
            <span className="text-sm ml-2 font-normal text-georgia-earth">Supra</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Главная", "Меню", "О нас", "Галерея", "Контакты"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-georgia-wine dark:text-georgia-cream hover:text-georgia-earth dark:hover:text-georgia-gold transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <Button className="bg-georgia-wine text-white hover:bg-georgia-earth">
            Бронировать стол
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-georgia-wine dark:text-georgia-cream"
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-georgia-wine/95 border-t border-gray-200 dark:border-georgia-wine animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Главная", "Меню", "О нас", "Галерея", "Контакты"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-georgia-wine dark:text-georgia-cream py-2 hover:text-georgia-earth dark:hover:text-georgia-gold transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-georgia-wine text-white hover:bg-georgia-earth w-full">
              Бронировать стол
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
