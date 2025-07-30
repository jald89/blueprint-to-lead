import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone, Info, Building } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">PropiedadesOK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </Link>
            <Link to="/propiedades" className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Propiedades</span>
            </Link>
            <Link to="/nosotros" className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Info className="h-4 w-4" />
              <span>Nosotros</span>
            </Link>
            <Link to="/contacto" className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Contacto</span>
            </Link>
            <Button asChild>
              <Link to="/contacto">Consultar</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/propiedades"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Propiedades
              </Link>
              <Link
                to="/nosotros"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;