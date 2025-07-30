import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const Properties = () => {
  const properties = [
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
    },
    {
      id: "4",
      title: "Duplex en Belgrano",
      price: "3500",
      location: "Belgrano, CABA",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: "alquiler" as const,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
    },
    {
      id: "5",
      title: "Penthouse con Terraza",
      price: "750000",
      location: "Recoleta, CABA",
      bedrooms: 3,
      bathrooms: 3,
      area: 150,
      type: "venta" as const,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
    },
    {
      id: "6",
      title: "Casa Familiar en Vicente López",
      price: "4200",
      location: "Vicente López, GBA Norte",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      type: "alquiler" as const,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Propiedades</h1>
            <p className="text-xl text-muted-foreground">
              Encuentra la propiedad perfecta entre nuestra selección
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Buscar por ubicación..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="alquiler">Alquiler</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="ph">PH</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                Mostrando {properties.length} propiedades
              </p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="newest">Más Recientes</SelectItem>
                  <SelectItem value="area">Área</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar Más Propiedades
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;