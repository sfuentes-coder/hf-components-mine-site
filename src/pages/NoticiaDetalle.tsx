import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NoticiaDetalle = () => {
  const { slug } = useParams();

  // En producción, esto vendría de una API o CMS
  const noticia = {
    title: "Nuevas alianzas estratégicas con proveedores internacionales",
    date: "15 Marzo 2025",
    category: "Alianzas",
    content: `
      HF Components continúa expandiendo su red de proveedores globales con la firma de acuerdos estratégicos que garantizan el acceso inmediato a componentes críticos para la industria minera chilena.

      Estas alianzas permiten a nuestros clientes beneficiarse de:
      
      - Disponibilidad garantizada de piezas originales
      - Precios competitivos gracias a compras directas
      - Tiempos de importación reducidos significativamente
      - Soporte técnico especializado de fabricantes

      Nuestro compromiso es seguir mejorando la cadena de suministro para asegurar que las operaciones mineras nunca se detengan por falta de repuestos.
    `
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="bg-muted py-4" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link to="/noticias" className="text-muted-foreground hover:text-foreground transition-colors">
                  Noticias
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                {noticia.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article */}
        <article className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link to="/noticias">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Volver a Noticias
              </Link>
            </Button>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {noticia.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                {noticia.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                  <time dateTime={noticia.date}>{noticia.date}</time>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                  aria-label="Compartir artículo"
                >
                  <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Compartir
                </Button>
              </div>
            </div>

            <div className="h-96 bg-muted rounded-2xl mb-8 flex items-center justify-center">
              <p className="text-muted-foreground italic">Imagen de la noticia</p>
            </div>

            <div className="prose prose-lg max-w-none">
              {noticia.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
              <Button asChild variant="outline">
                <Link to="/noticias">
                  <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                  Artículo anterior
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/noticias">
                  Siguiente artículo
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiaDetalle;
