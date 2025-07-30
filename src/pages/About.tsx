import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Home, Target, Link as LinkIcon } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Home, label: "Propiedades Vendidas", value: "500+" },
    { icon: Users, label: "Clientes Satisfechos", value: "1000+" },
    { icon: Award, label: "Años de Experiencia", value: "15+" },
    { icon: Target, label: "Barrios Cubiertos", value: "50+" }
  ];

  const team = [
    {
      name: "María González",
      role: "Directora Comercial",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "15 años de experiencia en el mercado inmobiliario"
    },
    {
      name: "Carlos Rodríguez",
      role: "Asesor Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Especialista en propiedades de lujo y inversiones"
    },
    {
      name: "Ana Martínez",
      role: "Asesora Inmobiliaria",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Experta en propiedades familiares y departamentos"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-xl text-muted-foreground">
                Somos una empresa familiar con más de 15 años de experiencia 
                ayudando a las personas a encontrar su hogar ideal.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Nuestra Misión
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    En PropiedadesOK creemos que encontrar el hogar perfecto es mucho más 
                    que una simple transacción. Es el comienzo de nuevas historias, 
                    sueños cumplidos y futuros prósperos.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Nuestro compromiso es brindar un servicio personalizado, honesto y 
                    transparente, acompañando a nuestros clientes en cada paso del proceso.
                  </p>
                  <Button asChild>
                    <a href="/contacto">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Contactanos
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                    alt="Oficina PropiedadesOK"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Profesionales comprometidos con tu satisfacción
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nuestros Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Excelencia
                  </h3>
                  <p className="text-muted-foreground">
                    Nos esforzamos por brindar el mejor servicio y superar las 
                    expectativas de nuestros clientes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Confianza
                  </h3>
                  <p className="text-muted-foreground">
                    Construimos relaciones duraderas basadas en la honestidad 
                    y la transparencia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Compromiso
                  </h3>
                  <p className="text-muted-foreground">
                    Estamos comprometidos con el éxito de nuestros clientes 
                    y trabajamos incansablemente para lograrlo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;