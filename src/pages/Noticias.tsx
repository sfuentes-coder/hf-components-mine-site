import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const Noticias = () => {
  const noticias = [
    {
      id: 1,
      title: "Nuevas alianzas estratégicas con proveedores internacionales",
      excerpt: "HF Components amplía su red de proveedores con acuerdos exclusivos que garantizan disponibilidad inmediata de componentes críticos.",
      date: "15 Marzo 2025",
      category: "Alianzas",
      slug: "nuevas-alianzas-estrategicas"
    },
    {
      id: 2,
      title: "Expansión de almacén en Región de Antofagasta",
      excerpt: "Inauguramos nuevo centro logístico con capacidad 300% mayor, reduciendo tiempos de entrega en el norte minero.",
      date: "8 Marzo 2025",
      category: "Infraestructura",
      slug: "expansion-almacen-antofagasta"
    },
    {
      id: 3,
      title: "Certificación ISO 9001:2015 renovada exitosamente",
      excerpt: "Mantenemos nuestro compromiso con la excelencia operacional y los más altos estándares de calidad internacional.",
      date: "1 Marzo 2025",
      category: "Certificaciones",
      slug: "certificacion-iso-renovada"
    },
    {
      id: 4,
      title: "Webinar: Mantenimiento predictivo en maquinaria minera",
      excerpt: "Únete a nuestro webinar gratuito sobre estrategias de mantenimiento que reducen costos y maximizan disponibilidad de equipos.",
      date: "22 Febrero 2025",
      category: "Eventos",
      slug: "webinar-mantenimiento-predictivo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Noticias & Actualidad</h1>
            <p className="text-lg text-secondary-foreground/90 max-w-2xl">
              Mantente informado sobre novedades, eventos y tendencias de la industria minera
            </p>
          </div>
        </section>

        {/* Noticias Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {noticias.map((noticia) => (
                <Card key={noticia.id} className="rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
                  <Link to={`/noticias/${noticia.slug}`} className="block">
                    <div className="h-48 bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground italic">Imagen de noticia</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {noticia.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                          <time dateTime={noticia.date}>{noticia.date}</time>
                        </div>
                      </div>
                      <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-secondary transition-colors">
                        {noticia.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {noticia.excerpt}
                      </p>
                      <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Leer más</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
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

export default Noticias;
