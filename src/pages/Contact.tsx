import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contacto
              </h1>
              <p className="text-xl text-muted-foreground">
                ¿Tienes alguna consulta? Estamos aquí para ayudarte. 
                Contáctanos y te responderemos a la brevedad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+54 11 1234-5678" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Dirección</h3>
                        <p className="text-muted-foreground">
                          Av. Corrientes 1234, Piso 5°<br />
                          C1043AAZ, Ciudad Autónoma de Buenos Aires<br />
                          Argentina
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                        <p className="text-muted-foreground">
                          +54 11 1234-5678<br />
                          +54 11 8765-4321
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info@propiedadesok.com<br />
                          ventas@propiedadesok.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
                        <p className="text-muted-foreground">
                          Lunes a Viernes: 9:00 - 18:00<br />
                          Sábados: 9:00 - 14:00<br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-muted-foreground">
                Visitanos en nuestra oficina en el corazón de Buenos Aires
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Mapa de ubicación<br />
                    Av. Corrientes 1234, CABA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;