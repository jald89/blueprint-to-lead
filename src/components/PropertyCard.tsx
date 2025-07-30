import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Phone } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "venta" | "alquiler";
  image: string;
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  type, 
  image 
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-4 left-4 ${
            type === 'venta' 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {type === 'venta' ? 'En Venta' : 'En Alquiler'}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}m²</span>
          </div>
        </div>
        
        <div className="text-2xl font-bold text-primary mb-4">
          ${price.toLocaleString()}
          {type === 'alquiler' && <span className="text-sm text-muted-foreground">/mes</span>}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button variant="outline" className="flex-1">
          Ver Detalles
        </Button>
        <Button className="flex-1">
          <Phone className="h-4 w-4 mr-2" />
          Contactar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;