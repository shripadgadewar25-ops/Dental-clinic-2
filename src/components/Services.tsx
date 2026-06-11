import { motion } from 'motion/react';
import { Heart, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Teeth Reshaping",
    description: "Minimally invasive contouring to correct chipped, uneven, or poorly aligned teeth instantly.",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    title: "Smile Designing",
    description: "Comprehensive aesthetic makeover combining veneers, whitening, and contouring for the perfect smile.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Routine Checkups",
    description: "Comprehensive oral examinations, digital x-rays, and professional cleanings to maintain optimal health.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Featured Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Advanced Dental Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 font-light"
          >
            We offer a comprehensive range of modern dental treatments designed to improve your oral health and boost your confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-[2rem] overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-brand-800 shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#booking" className="inline-flex items-center gap-2 text-brand-800 font-medium hover:text-brand-600 transition-colors">
                  Book Treatment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
