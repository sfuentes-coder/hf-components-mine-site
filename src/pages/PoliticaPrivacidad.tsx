import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
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
                <li aria-current="page">Política de Privacidad</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Política de Privacidad</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-muted-foreground">Última actualización: Marzo 2025</p>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Información que Recopilamos</h2>
                <p>
                  HF Components SpA recopila información personal cuando usted se comunica con nosotros a través de nuestros formularios de contacto, 
                  incluyendo: nombre, empresa, email corporativo, teléfono, región, cargo y mensaje.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Uso de la Información</h2>
                <p>Utilizamos su información para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responder a sus consultas sobre productos y servicios</li>
                  <li>Procesar solicitudes de cotización</li>
                  <li>Enviar información comercial relevante (solo con su consentimiento)</li>
                  <li>Mejorar nuestros servicios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">3. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra 
                  acceso no autorizado, pérdida o alteración.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">4. Sus Derechos</h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a su información personal</li>
                  <li>Solicitar corrección de datos inexactos</li>
                  <li>Solicitar eliminación de sus datos</li>
                  <li>Oponerse al tratamiento de sus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">5. Contacto</h2>
                <p>
                  Para ejercer sus derechos o consultas sobre privacidad, contáctenos en:{" "}
                  <a href="mailto:contacto@hfcomponents.cl" className="text-secondary underline">
                    contacto@hfcomponents.cl
                  </a>
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

export default PoliticaPrivacidad;
