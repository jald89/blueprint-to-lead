import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Encuentra tu
            <span className="text-primary block">hogar ideal</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre las mejores propiedades en venta y alquiler. 
            Te ayudamos a encontrar el lugar perfecto para ti y tu familia.
          </p>

          {/* Search Box */}
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="¿Dónde quieres vivir?"
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="md:px-8">
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/propiedades">Ver Propiedades</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/contacto">Contactar Asesor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;