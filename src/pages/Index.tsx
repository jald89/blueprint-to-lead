import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProperties = [
    {
      id: "1",
      title: "Departamento Moderno en Palermo",
      price: "350000",
      location: "Palermo, CABA",
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      type: "venta" as const,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
      id: "2",
      title: "Casa con Jardín en San Isidro",
      price: "2800",
      location: "San Isidro, GBA Norte",
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      type: "alquiler" as const,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Loft Industrial en Puerto Madero",
      price: "450000",
      location: "Puerto Madero, CABA",
      bedrooms: 1,
      bathrooms: 1,
      area: 65,
      type: "venta" as const,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Venta de Propiedades",
      description: "Te ayudamos a vender tu propiedad al mejor precio del mercado"
    },
    {
      icon: Search,
      title: "Búsqueda Personalizada",
      description: "Encontramos la propiedad perfecta según tus necesidades"
    },
    {
      icon: Award,
      title: "Asesoría Profesional",
      description: "Contamos con asesores expertos para guiarte en el proceso"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Servicio exclusivo y dedicado para cada cliente"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubre nuestras mejores ofertas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/propiedades">
                Ver Todas las Propiedades
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas para encontrar tu hogar ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Propiedades Vendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Barrios Cubiertos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para encontrar tu hogar ideal?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestros expertos están aquí para ayudarte en cada paso del camino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/propiedades">Ver Propiedades</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contacto">Contactar Asesor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
