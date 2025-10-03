import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Zap, Award, MapPin, Users } from "lucide-react";

const Nosotros = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" aria-hidden="true" />,
      title: "Seguridad",
      description: "Priorizamos la seguridad en cada componente que entregamos, garantizando operaciones sin riesgos."
    },
    {
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      title: "Disponibilidad",
      description: "Compromiso con tiempos de entrega que minimizan los tiempos muertos en tus operaciones."
    },
    {
      icon: <Heart className="w-8 h-8" aria-hidden="true" />,
      title: "Integridad",
      description: "Transparencia y honestidad en cada interacción con nuestros clientes y socios."
    }
  ];

  const milestones = [
    { year: "2015", event: "Fundación de HF Components" },
    { year: "2017", event: "Expansión a regiones del norte minero" },
    { year: "2019", event: "Certificación ISO 9001" },
    { year: "2021", event: "Alianzas estratégicas con marcas líderes" },
    { year: "2023", event: "Cobertura nacional consolidada" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Aseguramos la continuidad operacional de la gran minería con repuestos críticos y soporte confiable
              </h1>
              <p className="text-lg text-secondary-foreground/90 leading-relaxed">
                Somos el socio estratégico que las operaciones mineras necesitan para mantener su producción sin interrupciones.
              </p>
            </div>
          </div>
        </section>

        {/* Cobertura Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">Cobertura Nacional</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Operamos a nivel nacional, desde el norte minero hasta la zona central, con tiempos de entrega competitivos que aseguran la continuidad de tus operaciones.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Región de Tarapacá</p>
                    <p className="text-sm text-muted-foreground">Cobertura en principales faenas mineras</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Región de Antofagasta</p>
                    <p className="text-sm text-muted-foreground">Hub logístico principal</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Región de Atacama</p>
                    <p className="text-sm text-muted-foreground">Entrega express disponible</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Zona Central</p>
                    <p className="text-sm text-muted-foreground">Oficinas y almacén estratégico</p>
                  </div>
                </div>
              </div>
              <div className="h-96 bg-muted rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground italic">Mapa de cobertura Chile</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principios que guían cada decisión y cada relación con nuestros clientes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 rounded-2xl shadow-card text-center">
                  <div className="flex justify-center mb-4 text-secondary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Nuestra Historia</h2>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-primary-foreground">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pt-4">
                      <p className="text-lg font-medium text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Award className="w-12 h-12 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Certificaciones & Calidad</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cumplimos con los más altos estándares internacionales de calidad y gestión, asegurando la excelencia en cada proceso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 rounded-2xl shadow-card">
                  <h3 className="text-xl font-heading font-semibold mb-2">ISO 9001:2015</h3>
                  <p className="text-muted-foreground">Sistema de Gestión de Calidad certificado</p>
                </Card>
                <Card className="p-8 rounded-2xl shadow-card">
                  <h3 className="text-xl font-heading font-semibold mb-2">Control de Calidad</h3>
                  <p className="text-muted-foreground">Verificación rigurosa de cada componente</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Users className="w-12 h-12 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profesionales comprometidos con tu éxito operacional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 rounded-2xl shadow-card text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-1">Equipo Profesional</h3>
                  <p className="text-sm text-muted-foreground">Expertos en Repuestos Mineros</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nosotros;
