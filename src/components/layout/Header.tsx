import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md brutalist-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-2xl font-bold">
            MINIMAL WARDROBE
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-montserrat">
            <Link
              to="/catalog"
              className="text-foreground hover:text-accent transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/collections"
              className="text-foreground hover:text-accent transition-colors"
            >
              Коллекции
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-accent transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-accent transition-colors"
            >
              Блог
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Icon name={isDark ? "Sun" : "Moon"} size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-1 -right-1 bg-accent text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
