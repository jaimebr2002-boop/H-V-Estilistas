import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, MapPin, Phone, Instagram, Facebook, Clock, ChevronRight, Mail } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-primary font-sans selection:bg-accent-3 selection:text-white">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34696126941" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-50">
          <a href="#" className="flex items-center space-x-3 z-50">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/325986900_495580226039870_8576153378004743909_n._mq9ucw.jpg" 
              alt="H&V Estilistas logo" 
              className="h-10 w-10 object-cover rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="font-sans text-2xl md:text-3xl tracking-wider text-primary font-bold">H&V</span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-accent-1 uppercase">Estilistas</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#nosotros" className="text-sm font-medium text-primary/80 hover:text-accent-1 transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-medium text-primary/80 hover:text-accent-1 transition-colors">Servicios</a>
            <a href="#resultados" className="text-sm font-medium text-primary/80 hover:text-accent-1 transition-colors">Resultados</a>
            <a href="#resenas" className="text-sm font-medium text-primary/80 hover:text-accent-1 transition-colors">Reseñas</a>
            <a href="#contacto" className="text-sm font-medium text-primary/80 hover:text-accent-1 transition-colors">Contacto</a>
            <a href="#reservar" className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md">
              Reservar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 text-primary p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('nosotros'); }} className="font-serif text-2xl text-primary">Nosotros</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('servicios'); }} className="font-serif text-2xl text-primary">Servicios</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('resultados'); }} className="font-serif text-2xl text-primary">Resultados</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('resenas'); }} className="font-serif text-2xl text-primary">Reseñas</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('contacto'); }} className="font-serif text-2xl text-primary">Contacto</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNavClick('reservar'); }} className="px-8 py-3 bg-primary text-white text-lg rounded-sm mt-4">
          Reservar
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Ambiente de peluquería de lujo" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/95"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/325986900_495580226039870_8576153378004743909_n._mq9ucw.jpg" 
              alt="H Y V Estilistas Logo" 
              className="mx-auto h-24 md:h-32 object-contain mb-8 rounded-full shadow-sm"
              onError={(e) => {
                // Fallback si no existe la imagen
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Tu pelo, por fin <br className="hidden md:block" />
              como siempre quisiste
            </h1>
            <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 font-light">
              Especialistas en color, balayage y mechas en Oviedo. Taty y su equipo llevan años transformando melenas — y nunca fallan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#reservar" className="px-8 py-4 bg-accent-4 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-accent-4/90 transition-all duration-300 w-full sm:w-auto shadow-md">
                Reserva tu cita
              </a>
              <a href="#servicios" className="px-8 py-4 bg-transparent border border-primary/20 text-primary text-sm font-medium tracking-wide rounded-sm hover:border-primary hover:bg-altbg transition-all duration-300 w-full sm:w-auto">
                Ver servicios
              </a>
            </div>
            
            <div className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-primary/10 px-5 py-2.5 rounded-full shadow-sm">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span className="text-sm font-medium text-primary">5,0 en Google</span>
              <span className="mx-2 text-primary/30">·</span>
              <span className="text-sm text-secondary font-light">43 reseñas verificadas</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative botanical element */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none transform -translate-x-1/2 translate-y-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8FAF8A" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.4,-3.1C94,11.8,85.2,26.1,75.3,38.5C65.4,50.9,54.4,61.4,41.6,69.5C28.8,77.6,14.4,83.3,0.1,83.1C-14.2,82.9,-28.4,76.8,-41.2,68.7C-54,60.6,-65.4,50.5,-73.7,38.3C-82,26.1,-87.2,11.8,-86.8,-2.3C-86.4,-16.4,-80.4,-30.3,-71.5,-41.4C-62.6,-52.5,-50.8,-60.8,-38.1,-68.5C-25.4,-76.2,-12.7,-83.3,1.3,-85.6C15.3,-87.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-altbg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                Más que una peluquería. <br />
                <span className="text-accent-1 italic font-display">Un lugar donde te escuchan.</span>
              </h2>
              <p className="text-secondary text-base leading-relaxed mb-6 font-light">
              H&V Estilistas nació para ser ese sitio de confianza donde cada clienta sale exactamente como quería. Taty lidera el equipo con formación continua, pasión por el color y una atención personalizada que va más allá del servicio.
              </p>
              <p className="text-secondary text-base leading-relaxed mb-10 font-light">
                No es solo cortar o teñir — es escuchar, asesorar y transformar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-primary/5">
                  <span className="text-xl mr-3">🌿</span>
                  <span className="text-sm font-medium text-primary">Formación continua</span>
                </div>
                <div className="flex items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-primary/5">
                  <span className="text-xl mr-3">✨</span>
                  <span className="text-sm font-medium text-primary">Especialistas en color</span>
                </div>
                <div className="flex items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-primary/5">
                  <span className="text-xl mr-3">💛</span>
                  <span className="text-sm font-medium text-primary">Trato cercano</span>
                </div>
                <div className="flex items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-primary/5">
                  <span className="text-xl mr-3">🎨</span>
                  <span className="text-sm font-medium text-primary">Técnicas de vanguardia</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2 relative order-1 lg:order-2"
            >
              <div className="relative z-10 rounded-t-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/325986900_495580226039870_8576153378004743909_n._mq9ucw.jpg" 
                  alt="Equipo de H Y V Estilistas" 
                  className="w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-accent-3/20 rounded-t-full z-0"></div>
              <div className="absolute top-1/4 -left-12 w-32 h-32 bg-accent-2/20 rounded-full blur-2xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Nuestros servicios</h2>
            <p className="font-display text-accent-1 text-xl italic">Cada servicio está pensado para que salgas encantada.</p>
            <div className="w-16 h-[1px] bg-accent-2 mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "💇‍♀️",
                title: "Corte y estilismo",
                desc: "Cortes personalizados adaptados a tu tipo de pelo y estilo de vida"
              },
              {
                icon: "🎨",
                title: "Balayage y mechas",
                desc: "Nuestra especialidad. Técnica depurada para un color natural, luminoso y sin estridencias"
              },
              {
                icon: "🌈",
                title: "Coloración y corrección",
                desc: "Transformaciones completas con productos de calidad. Resolvemos los colores que otros no supieron hacer"
              },
              {
                icon: "💜",
                title: "Tratamientos capilares",
                desc: "Recupera la salud y brillo de tu melena con tratamientos profesionales"
              },
              {
                icon: "👰",
                title: "Peinados para eventos",
                desc: "Tu gran día merece un look que aguante el baile, los abrazos y las lágrimas de emoción"
              },
              {
                icon: "✂️",
                title: "Depilación con hilo",
                desc: "Definición perfecta y sin dolor con técnica tradicional para tus cejas"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn} 
                className="group bg-white border border-primary/5 rounded-lg p-8 hover:shadow-xl hover:border-accent-3/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-accent-1 transition-colors">{service.title}</h3>
                <p className="text-secondary text-sm font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-24 bg-altbg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Hablan los resultados</h2>
            <p className="font-display text-accent-1 text-xl italic">Cada foto cuenta una historia de transformación.</p>
            <div className="w-16 h-[1px] bg-accent-2 mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {[
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/569340585_17976879392930224_4897096568551395508_n._wpncdc.jpg",
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/Balayage_%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_balayage_balayageoviedo_balayageasturias_mechasbalayage_oviedo_asturias_in_tpa5rd.jpg",
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/604922305_17983014800930224_3596225195504801527_n._bwk4bt.jpg",
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/Balayage_%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_monica_salonculture_asturias_blondesolutions_es_veroredken_redken_es_balaya_sayvyh.jpg",
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/M%C3%A1s_detalles_de_nuestra_morena_iluminada_balayage_balayageasturias_balayageoviedo_oviedo_as_czp9xx.jpg",
              "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098126/T%C3%A9cnica_de_balayage_balayage_balayageasturias_balayageoviedo_oviedo_asturias_oviedopeluque_qchpoy.jpg"
            ].map((imgUrl, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative overflow-hidden rounded-sm aspect-[4/5] group">
                <img 
                  src={imgUrl}
                  alt={`Resultado de transformación ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <a 
              href="https://www.instagram.com/hv_estilistas/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-accent-1 font-medium transition-colors"
            >
              <Instagram className="mr-2 w-5 h-5" />
              ¿Quieres ver más? Síguenos en Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="resenas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Lo que dicen nuestras clientas</h2>
            
            <div className="inline-flex items-center justify-center bg-altbg border border-primary/10 px-6 py-3 rounded-full shadow-sm mb-8">
              <span className="text-yellow-500 mr-2 tracking-widest">⭐⭐⭐⭐⭐</span>
              <span className="text-base font-medium text-primary">5,0</span>
              <span className="mx-2 text-primary/30">·</span>
              <span className="text-sm text-secondary font-light">43 reseñas en Google</span>
            </div>
          </motion.div>

          {/* Carrusel/Grid de Reseñas */}
          <div className="relative overflow-hidden w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 pt-4 px-4 -mx-4">
              {[
                {
                  name: "Sara Garridocubiella",
                  text: "Fui a peinarme para el día de mi boda. El sábado abrió antes para mí, el pelo me aguantó todo el día, bailando y saltando, la tiara no se movió. Precio muy justo para todo lo que era."
                },
                {
                  name: "Miriam García",
                  text: "Después de probar unas cuantas peluquerías y nunca quedar 100% a gusto, probé aquí por las recomendaciones y qué gran acierto. El resultado, maravilloso."
                },
                {
                  name: "Paola Llaneza Suárez",
                  text: "Tati es LA MEJOR. Venía de varias peluquerías haciéndome balayage y nunca daban lo que yo quería… hasta que la conocí. No solo es lo bien que te deja, es que escucha qué es lo que quieres y cómo lo quieres."
                },
                {
                  name: "Eva Garcia",
                  text: "Tati es súper profesional, super eficaz y sabe lo que mejor te sienta. Mi pelo está genial, me veo súper favorecida y con el pelo súper cuidado. Recomendada 100%."
                },
                {
                  name: "Lara Se Ga",
                  text: "Taty estudia cada caso concreto y se preocupa por la salud y estética de tu cabello. No solo es una gran profesional en constante formación, también es una bellísima persona, honrada y sincera."
                },
                {
                  name: "yohana garcia morales",
                  text: "¡La mejor! Tiene un nivel de color y técnica alucinante. Local sencillo, trato familiar y resultado de categoría. Normal que tenga la agenda a tope."
                }
              ].map((review, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-altbg rounded-lg p-8 border border-primary/5 shadow-sm flex flex-col"
                >
                  <div className="text-yellow-500 text-sm tracking-widest mb-4">⭐⭐⭐⭐⭐</div>
                  <p className="text-secondary text-base font-light leading-relaxed mb-6 flex-grow italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent-3/20 rounded-full flex items-center justify-center text-primary font-serif font-medium mr-3">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-primary text-sm">{review.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-8"
          >
            <a 
              href="https://www.google.es/maps/place/H%26V+Estilistas/@43.3621834,-5.8602923,17z/data=!4m18!1m9!3m8!1s0xd368daec88dd14d:0x96ee1157b3a0938c!2sH%26V+Estilistas!8m2!3d43.3621074!4d-5.8602763!9m1!1b1!16s%2Fg%2F11sf8vysvl!3m7!1s0xd368daec88dd14d:0x96ee1157b3a0938c!8m2!3d43.3621074!4d-5.8602763!9m1!1b1!16s%2Fg%2F11sf8vysvl?hl=es&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-primary text-primary text-sm font-medium rounded-sm hover:bg-primary hover:text-white transition-all duration-300"
            >
              Deja tu reseña en Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="contacto" className="py-24 bg-altbg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Encuéntranos en Oviedo</h2>
            <div className="w-16 h-[1px] bg-accent-2 mx-auto mt-6"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Info Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/3 flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-1 shadow-sm shrink-0 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Dirección</h4>
                    <p className="text-secondary text-base font-light">
                      C. Julio González Pola, 1<br />
                      33013 Oviedo, Asturias
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-1 shadow-sm shrink-0 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Teléfono</h4>
                    <a href="tel:696126941" className="text-secondary text-base font-light hover:text-accent-1 transition-colors">
                      696 12 69 41
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-1 shadow-sm shrink-0 mr-4">
                    <Clock size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-serif text-xl text-primary mb-2">Horarios</h4>
                    <ul className="text-secondary text-sm font-light space-y-2 w-full">
                      <li className="flex justify-between border-b border-primary/5 pb-1">
                        <span>Lunes</span>
                        <span className="text-accent-1">Cerrado</span>
                      </li>
                      <li className="flex justify-between border-b border-primary/5 pb-1">
                        <span>Mar - Mié</span>
                        <span>9:30–14:00 / 16:00–19:00</span>
                      </li>
                      <li className="flex justify-between border-b border-primary/5 pb-1">
                        <span>Jue - Vie</span>
                        <span>9:30–19:00</span>
                      </li>
                      <li className="flex justify-between border-b border-primary/5 pb-1">
                        <span>Sábado</span>
                        <span>10:00–14:00</span>
                      </li>
                      <li className="flex justify-between pb-1">
                        <span>Domingo</span>
                        <span className="text-accent-1">Cerrado</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-serif text-xl text-primary mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/hv_estilistas/?hl=es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://www.facebook.com/p/HV-Estilistas-100089177396344/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-2/3 h-[400px] lg:h-auto min-h-[500px] rounded-lg overflow-hidden shadow-md border border-primary/5"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.483605481717!2d-5.862851223403315!3d43.36210737111818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368daec88dd14d%3A0x96ee1157b3a0938c!2sH%26V%20Estilistas!5e0!3m2!1ses!2ses!4v1712560000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de H Y V Estilistas"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reserva Section */}
      <section id="reservar" className="py-24 bg-white relative overflow-hidden">
        {/* Botanical SVGs */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none transform -translate-x-1/4 -translate-y-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#8FAF8A" d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.4,-40.5C85.7,-25.7,92.1,-10.1,90.1,4.3C88.1,18.7,77.7,31.9,67.1,43.9C56.5,55.9,45.7,66.7,32.6,73.4C19.5,80.1,4.1,82.7,-10.6,80.6C-25.3,78.5,-39.3,71.7,-51.8,62.3C-64.3,52.9,-75.3,40.9,-81.8,26.5C-88.3,12.1,-90.3,-4.7,-85.9,-19.8C-81.5,-34.9,-70.7,-48.3,-57.6,-56.4C-44.5,-64.5,-29.1,-67.3,-14.7,-68.8C-0.3,-70.3,13.1,-70.5,26.5,-71.5C39.9,-72.5,53.3,-74.3,45.7,-76.3Z" transform="translate(100 100)" /></svg>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#C4785A" d="M41.5,-67.7C54.3,-60.5,65.5,-49.8,73.1,-36.8C80.7,-23.8,84.7,-8.5,82.8,6.1C80.9,20.7,73.1,34.6,62.5,45.6C51.9,56.6,38.5,64.7,24.1,70.5C9.7,76.3,-5.7,79.8,-20.5,77.4C-35.3,75,-49.5,66.7,-60.1,55.1C-70.7,43.5,-77.7,28.6,-81.2,12.8C-84.7,-3,-84.7,-19.7,-78.2,-33.6C-71.7,-47.5,-58.7,-58.6,-44.6,-65.2C-30.5,-71.8,-15.3,-73.9,-0.2,-73.6C14.9,-73.3,28.7,-74.9,41.5,-67.7Z" transform="translate(100 100)" /></svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">¿Lista para tu transformación?</h2>
            <p className="text-secondary text-lg md:text-xl font-light mb-12">Llámanos o escríbenos y te reservamos el hueco perfecto.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="tel:696126941" className="flex items-center justify-center px-8 py-4 bg-accent-4 text-white text-lg font-medium rounded-full hover:bg-accent-4/90 transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-1">
                <Phone className="mr-2" size={24} />
                Llamar ahora
              </a>
              <a href="https://wa.me/34696126941" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-lg font-medium rounded-full hover:bg-[#20b958] transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-1">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-secondary text-sm font-light mb-4">También puedes encontrarnos en redes sociales</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hv_estilistas/?hl=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent-1 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/p/HV-Estilistas-100089177396344/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent-1 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/90 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="flex flex-col items-start">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776098125/325986900_495580226039870_8576153378004743909_n._mq9ucw.jpg" 
                alt="H&V Estilistas logo" 
                className="h-20 w-20 object-cover mb-6 rounded-full opacity-90 shadow-sm border-2 border-white/20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.insertAdjacentHTML('afterbegin', '<div class="flex flex-col items-start mb-6"><span class="font-sans text-3xl tracking-wider text-white font-bold">H&V</span><span class="font-sans text-sm tracking-[0.2em] text-white/70 uppercase">Estilistas</span></div>');
                }}
              />
              <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                Tu peluquería boutique en Oviedo. Especialistas en color, balayage y tratamientos personalizados para resaltar tu belleza natural.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hv_estilistas/?hl=es" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-3 hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/p/HV-Estilistas-100089177396344/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-3 hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Explorar</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="text-white/60 hover:text-accent-3 transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="text-white/60 hover:text-accent-3 transition-colors">Sobre nosotros</a></li>
                <li><a href="#servicios" className="text-white/60 hover:text-accent-3 transition-colors">Nuestros servicios</a></li>
                <li><a href="#resultados" className="text-white/60 hover:text-accent-3 transition-colors">Resultados</a></li>
                <li><a href="#resenas" className="text-white/60 hover:text-accent-3 transition-colors">Reseñas</a></li>
                <li><a href="#contacto" className="text-white/60 hover:text-accent-3 transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-accent-3 shrink-0 mt-0.5" />
                  <span className="text-white/60 leading-relaxed">
                    C. Julio González Pola, 1,<br />
                    33013 Oviedo, Asturias
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-accent-3 shrink-0" />
                  <a href="tel:696126941" className="text-white/60 hover:text-white transition-colors">696 12 69 41</a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-accent-3 shrink-0" />
                  <a href="mailto:info@hvestilistas.com" className="text-white/60 hover:text-white transition-colors">info@hvestilistas.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Hours */}
            <div>
              <h4 className="font-serif text-xl text-white mb-6">Horario</h4>
              <ul className="space-y-3 text-sm font-light">
                <li className="flex justify-between text-white/60">
                  <span>Lunes</span>
                  <span className="text-accent-3">Cerrado</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Mar - Mié</span>
                  <span>9:30–14:00 / 16:00–19:00</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Jue - Vie</span>
                  <span>9:30–19:00</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Sábado</span>
                  <span>10:00–14:00</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Domingo</span>
                  <span className="text-accent-3">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/40 text-xs font-light">
              &copy; 2025 H&V Estilistas · Todos los derechos reservados
            </p>
            <div className="flex gap-6 text-white/30 text-[10px] uppercase tracking-widest">
              <a href="#" className="hover:text-white/60 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white/60 transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
