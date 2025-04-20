import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Link } from "wouter";
import { Menu, SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 dark:bg-dark-900/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-primary hover:text-primary/90 dark:text-primary-foreground flex items-center">
          <span className="bg-primary dark:bg-primary/90 text-white h-8 w-8 rounded-md flex items-center justify-center mr-2">AD</span>
          Abhijit Dengale
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#about" className="nav-link text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="nav-link text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="nav-link text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="nav-link text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="nav-link text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <ThemeToggle />
          
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <button 
          id="mobile-menu-button" 
          className="md:hidden p-2 rounded-md text-muted-foreground hover:bg-accent"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden bg-background shadow-md ${mobileMenuOpen ? "block" : "hidden"}`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#about" className="nav-link py-2 text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#experience" className="nav-link py-2 text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="nav-link py-2 text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="nav-link py-2 text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="nav-link py-2 text-muted-foreground hover:text-primary transition-colors">Contact</a>
          
          <div className="flex justify-between">
            <ThemeToggle />
            
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .nav-link.active {
          color: hsl(var(--primary));
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
