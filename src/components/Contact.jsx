import React, { useState } from "react";
import Divider from "./Divider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar a FormSubmit.co (servicio gratuito que redirige emails)
      const response = await fetch("https://formsubmit.co/ajax/valenbelone14@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email",
      value: "valenbelone14@gmail.com",
      link: "mailto:valenbelone14@gmail.com"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: "Teléfono",
      value: "+54 9 3385 404898",
      link: "tel:+549"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/valentín-belone",
      link: "https://www.linkedin.com/in/valentín-belone-a447b42b7/"
    }
  ];

  return (
    <section id="contacto" className="py-24 px-6 md:px-[10%] bg-gradient-to-b from-[#0d0d0d] to-[#0f1419]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#d4af37] text-center mb-2">
          Contacto
        </h2>
        <Divider />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <div className="space-y-6">
            <h3 className="font-['Cinzel'] text-2xl text-[#d4d4d4] mb-6">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-['Cinzel'] text-[#d4af37] mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#8c8c8c] text-[#d4d4d4] font-['Inter'] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-['Cinzel'] text-[#d4af37] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#8c8c8c] text-[#d4d4d4] font-['Inter'] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                  placeholder="tu-email@ejemplo.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-sm font-['Cinzel'] text-[#d4af37] mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#8c8c8c] text-[#d4d4d4] font-['Inter'] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-['Cinzel'] text-[#d4af37] mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#8c8c8c] text-[#d4d4d4] font-['Inter'] focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors resize-none"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 rounded-md font-semibold text-lg font-['Cinzel'] transition-all duration-300 ease-out
                  ${isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed opacity-70' 
                    : submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-[#d4af37] to-[#c39920] text-[#0d0d0d]'
                  }
                  hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]
                  hover:scale-105
                  active:scale-98
                  focus:outline-2 focus:outline-offset-2 focus:outline-[#d4af37]
                  disabled:hover:scale-100 disabled:hover:shadow-none`}
              >
                {isSubmitting 
                  ? 'Enviando...' 
                  : submitStatus === 'success' 
                  ? '✓ Mensaje enviado'
                  : 'Enviar Mensaje'
                }
              </button>

              {/* Mensajes de estado */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-600 text-green-400 font-['Inter'] text-sm">
                  ✓ Mensaje enviado exitosamente. Te responderé pronto.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-600 text-red-400 font-['Inter'] text-sm">
                  ✗ Hubo un error. Por favor intenta de nuevo.
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="font-['Cinzel'] text-2xl text-[#d4d4d4] mb-6">
              Otras formas de contactarme
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                  className="flex items-start gap-4 p-4 border border-[#8c8c8c] hover:border-[#d4af37] bg-[#1a1a1a] hover:bg-[#1a1a1a]/80 transition-all duration-300 group"
                >
                  <div className="text-[#d4af37] group-hover:scale-110 transition-transform mt-1">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Cinzel'] text-[#d4af37] mb-1">
                      {method.label}
                    </h4>
                    <p className="text-[#d4d4d4] text-sm font-['Inter'] group-hover:text-[#d4af37] transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
