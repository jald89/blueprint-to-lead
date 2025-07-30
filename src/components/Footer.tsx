import { Link } from "react-router-dom";
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">PropiedadesOK</span>
            </div>
            <p className="text-muted-foreground">
              Tu socio confiable en bienes raíces. Encontramos el hogar perfecto para ti.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/propiedades" className="text-muted-foreground hover:text-primary transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Venta de Propiedades</li>
              <li>Alquiler de Propiedades</li>
              <li>Asesoría Inmobiliaria</li>
              <li>Valuaciones</li>
              <li>Inversiones</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@propiedadesok.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Av. Corrientes 1234, CABA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 PropiedadesOK. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;