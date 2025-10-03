import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Truck, 
  Award, 
  Shield, 
  Users, 
  MapPin,
  Clock,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";
import componentsImage from "@/assets/components-parts.jpg";
import warehouseImage from "@/assets/warehouse-logistics.jpg";

const Index = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" aria-hidden="true" />,
      title: "Entrega Rápida",
      description: "Repuestos críticos disponibles en tiempo record, asegurando continuidad operativa."
    },
    {
      icon: <Award className="w-6 h-6" aria-hidden="true" />,
      title: "Marcas Líderes",
      description: "Komatsu, Epiroc, Sandvik, Hitachi, Bosch Rexroth, Volvo, Liebherr, Parker, ZF."
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      title: "Calidad Garantizada",
      description: "Solo piezas originales o equivalentes certificados para máxima durabilidad y seguridad."
    },
    {
      icon: <Users className="w-6 h-6" aria-hidden="true" />,
      title: "Soporte Cercano",
      description: "Atención personalizada y confianza para resolver tus necesidades con rapidez."
    },
    {
      icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
      title: "Cobertura Nacional",
      description: "Abastecemos a clientes en todas las regiones mineras de Chile."
    },
  ];

  const kpis = [
    { label: "SLA de Entrega", value: "98%", icon: <Clock className="w-5 h-5" aria-hidden="true" /> },
    { label: "Fill Rate", value: "95%", icon: <CheckCircle2 className="w-5 h-5" aria-hidden="true" /> },
    { label: "Tiempo Respuesta", value: "< 2h", icon: <TrendingUp className="w-5 h-5" aria-hidden="true" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
              role="presentation"
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                HF Components | Repuestos críticos para maquinaria minera en Chile
              </h1>
              <p className="text-lg md:text-xl mb-8 text-secondary-foreground/90">
                Mantén tu operación minera activa con repuestos de calidad, entrega rápida y soporte confiable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="attention" size="lg">
                  <Link to="/contacto">Solicita disponibilidad</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  <Link to="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capacidades Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Capacidades Logísticas</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nuestra logística integrada, trazabilidad de piezas y control de calidad aseguran que cada repuesto llegue en tiempo y forma, reduciendo riesgos para la operación minera.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">Gestión de inventario en tiempo real</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">Trazabilidad completa de cada componente</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">Red de despacho nacional optimizada</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={warehouseImage} 
                  alt="Almacén moderno de HF Components con gestión eficiente de inventario" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industrias Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={componentsImage} 
                  alt="Repuestos de alta calidad para maquinaria minera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Industrias & Aplicaciones</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Apoyamos operaciones de perforación, extracción, acarreo, chancado y mantenimiento en faenas a lo largo de Chile.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">Perforación</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">Extracción</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">Transporte</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">Chancado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Confianza Respaldada por Resultados</h2>
              <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
                Métricas que demuestran nuestro compromiso con la excelencia operacional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {kpis.map((kpi, index) => (
                <Card key={index} className="p-8 rounded-2xl text-center bg-card text-card-foreground">
                  <div className="flex justify-center mb-4 text-secondary">
                    {kpi.icon}
                  </div>
                  <p className="text-4xl font-heading font-bold mb-2 text-secondary">{kpi.value}</p>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl shadow-card border-l-4 border-l-primary">
              <blockquote>
                <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic">
                  "HF Components nos ha permitido reducir tiempos muertos críticos en nuestra flota minera."
                </p>
                <footer className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Cliente Satisfecho</p>
                    <p className="text-sm text-muted-foreground">Operación Minera, Región de Antofagasta</p>
                  </div>
                </footer>
              </blockquote>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">¿Necesitas repuestos críticos?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y asegura la continuidad de tu operación minera
            </p>
            <Button asChild variant="attention" size="lg">
              <Link to="/contacto">Solicita disponibilidad ahora</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
