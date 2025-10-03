import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-lg font-heading font-bold text-secondary-foreground">HF</span>
              </div>
              <span className="text-lg font-heading font-bold">HF Components</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Repuestos críticos para maquinaria minera en Chile. Entrega rápida, calidad garantizada.
            </p>
            <a
              href="https://linkedin.com/company/hf-components"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors"
              aria-label="Visitar perfil de LinkedIn"
            >
              <Linkedin size={20} />
              <span>Síguenos en LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 text-primary">Mapa del Sitio</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 text-primary">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:contacto@hfcomponents.cl" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  contacto@hfcomponents.cl
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="tel:+56912345678" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-gray-400">
                  Santiago, Chile
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-heading font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidad" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs text-gray-500">
              © {currentYear} HF Components SpA. Todos los derechos reservados. RUT: XX.XXX.XXX-X
            </p>
            <p className="text-xs text-gray-500">
              Desarrollado con tecnología Lovable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
