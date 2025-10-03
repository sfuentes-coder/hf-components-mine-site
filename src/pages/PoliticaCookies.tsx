import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground">Home</Link></li>
                <li>/</li>
                <li aria-current="page">Política de Cookies</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Política de Cookies</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-muted-foreground">Última actualización: Marzo 2025</p>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
                  Nos ayudan a mejorar su experiencia de navegación y analizar el uso del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Tipos de Cookies que Utilizamos</h2>
                
                <h3 className="text-xl font-heading font-medium mb-2">Cookies Esenciales</h3>
                <p>Necesarias para el funcionamiento básico del sitio web.</p>

                <h3 className="text-xl font-heading font-medium mb-2 mt-4">Cookies de Análisis</h3>
                <p>Nos permiten entender cómo los visitantes interactúan con nuestro sitio (Google Analytics).</p>

                <h3 className="text-xl font-heading font-medium mb-2 mt-4">Cookies de Preferencias</h3>
                <p>Recuerdan sus preferencias y configuraciones para futuras visitas.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Control de Cookies</h2>
                <p>
                  Puede configurar su navegador para rechazar cookies o alertarle cuando se envíen. Sin embargo, 
                  algunas partes del sitio pueden no funcionar correctamente sin cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Más Información</h2>
                <p>
                  Para más información sobre nuestras prácticas de privacidad, consulte nuestra{" "}
                  <Link to="/politica-privacidad" className="text-secondary underline">
                    Política de Privacidad
                  </Link>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
