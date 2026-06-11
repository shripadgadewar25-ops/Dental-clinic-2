import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function GalleryAndAbout() {
  const reasons = [
    "Over 15 years of clinical excellence",
    "Painless and advanced microscopic dentistry",
    "Strict sterilization & hygiene protocols",
    "Friendly and compassionate team"
  ];

  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Creating Beautiful Smiles
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              We believe that every patient deserves specialized, personal attention. Our state-of-the-art clinic is designed to provide you with the most comfortable, anxiety-free dental experience possible, utilizing the latest in modern dental technology.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12 pt-8 border-t border-gray-200">
              <div>
                <strong className="block text-4xl font-serif font-bold text-brand-800 mb-1">10k+</strong>
                <span className="text-gray-500 font-light text-sm tracking-wide uppercase">Happy Patients</span>
              </div>
              <div>
                <strong className="block text-4xl font-serif font-bold text-brand-800 mb-1">15+</strong>
                <span className="text-gray-500 font-light text-sm tracking-wide uppercase">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-200 rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
              alt="Our Dental Team" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-xl"
            />
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block">Clinic Tour</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Experience Our Modern Hub</h2>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Top row - 2 images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Clinic Room" 
                className="w-full h-80 object-cover rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow"
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1000&q=80" 
                alt="Reception Area" 
                className="w-full h-80 object-cover rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow"
              />
            </div>
            {/* Bottom row - 1 image centered */}
            <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
                alt="Advanced Equipment" 
                className="w-full md:w-8/12 lg:w-1/2 h-80 object-cover rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
