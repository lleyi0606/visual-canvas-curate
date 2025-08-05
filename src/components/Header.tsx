import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold tracking-tight">
              ATELIER
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#works" className="text-foreground hover:text-accent transition-colors">
              Works
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#works" className="block text-foreground hover:text-accent transition-colors">
                Works
              </a>
              <a href="#about" className="block text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#contact" className="block text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;