import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  empresa: z.string().trim().min(2, "El nombre de empresa es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20),
  region: z.string().trim().min(2, "Selecciona una región").max(100),
  cargo: z.string().trim().min(2, "El cargo es requerido").max(100),
  mensaje: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
  aceptaPrivacidad: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Formulario enviado:", data);
    toast.success("Mensaje enviado exitosamente. Te contactaremos pronto.");
    reset();
    setIsSubmitting(false);
  };

  const regiones = [
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Metropolitana",
    "O'Higgins",
    "Maule"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contáctanos</h1>
            <p className="text-lg text-secondary-foreground/90 max-w-2xl">
              Estamos listos para apoyar tus necesidades de repuestos críticos. Completa el formulario o contáctanos directamente.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Formulario */}
              <div className="lg:col-span-2">
                <Card className="p-8 rounded-2xl shadow-card">
                  <h2 className="text-2xl font-heading font-bold mb-6">Solicita información</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                          Nombre <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="nombre"
                          {...register("nombre")}
                          placeholder="Tu nombre completo"
                          aria-invalid={errors.nombre ? "true" : "false"}
                          aria-describedby={errors.nombre ? "nombre-error" : undefined}
                        />
                        {errors.nombre && (
                          <p id="nombre-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.nombre.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                          Empresa <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="empresa"
                          {...register("empresa")}
                          placeholder="Nombre de tu empresa"
                          aria-invalid={errors.empresa ? "true" : "false"}
                          aria-describedby={errors.empresa ? "empresa-error" : undefined}
                        />
                        {errors.empresa && (
                          <p id="empresa-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.empresa.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Corporativo <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="tu@empresa.cl"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                          Teléfono <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="telefono"
                          type="tel"
                          {...register("telefono")}
                          placeholder="+56 9 1234 5678"
                          aria-invalid={errors.telefono ? "true" : "false"}
                          aria-describedby={errors.telefono ? "telefono-error" : undefined}
                        />
                        {errors.telefono && (
                          <p id="telefono-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.telefono.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="region" className="block text-sm font-medium mb-2">
                          Región <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="region"
                          {...register("region")}
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                          aria-invalid={errors.region ? "true" : "false"}
                          aria-describedby={errors.region ? "region-error" : undefined}
                        >
                          <option value="">Selecciona una región</option>
                          {regiones.map((region) => (
                            <option key={region} value={region}>{region}</option>
                          ))}
                        </select>
                        {errors.region && (
                          <p id="region-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.region.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cargo" className="block text-sm font-medium mb-2">
                          Cargo <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="cargo"
                          {...register("cargo")}
                          placeholder="Tu cargo en la empresa"
                          aria-invalid={errors.cargo ? "true" : "false"}
                          aria-describedby={errors.cargo ? "cargo-error" : undefined}
                        />
                        {errors.cargo && (
                          <p id="cargo-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.cargo.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                        Mensaje <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="mensaje"
                        {...register("mensaje")}
                        placeholder="Describe tus necesidades de repuestos..."
                        rows={6}
                        aria-invalid={errors.mensaje ? "true" : "false"}
                        aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                      />
                      {errors.mensaje && (
                        <p id="mensaje-error" className="text-sm text-destructive mt-1" role="alert">
                          {errors.mensaje.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="aceptaPrivacidad"
                        {...register("aceptaPrivacidad")}
                        aria-invalid={errors.aceptaPrivacidad ? "true" : "false"}
                        aria-describedby={errors.aceptaPrivacidad ? "privacidad-error" : undefined}
                      />
                      <label htmlFor="aceptaPrivacidad" className="text-sm leading-relaxed">
                        Acepto la <a href="/politica-privacidad" className="text-secondary underline">Política de Privacidad</a> <span className="text-destructive">*</span>
                      </label>
                    </div>
                    {errors.aceptaPrivacidad && (
                      <p id="privacidad-error" className="text-sm text-destructive" role="alert">
                        {errors.aceptaPrivacidad.message}
                      </p>
                    )}

                    <Button 
                      type="submit" 
                      variant="attention" 
                      size="lg" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Información de contacto */}
              <div className="space-y-6">
                <Card className="p-6 rounded-2xl shadow-card">
                  <h3 className="text-xl font-heading font-semibold mb-6">Contacto Directo</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm mb-1">Email</p>
                        <a href="mailto:contacto@hfcomponents.cl" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                          contacto@hfcomponents.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm mb-1">Teléfono</p>
                        <a href="tel:+56912345678" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                          +56 9 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm mb-1">WhatsApp</p>
                        <a 
                          href="https://wa.me/56912345678" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Enviar mensaje
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm mb-1">Horario</p>
                        <p className="text-sm text-muted-foreground">Lun-Vie: 8:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl shadow-card">
                  <h3 className="text-xl font-heading font-semibold mb-4">Ubicación</h3>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">
                      Santiago, Chile<br />
                      Región Metropolitana
                    </p>
                  </div>
                  <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-sm text-muted-foreground italic">Mapa de ubicación</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
