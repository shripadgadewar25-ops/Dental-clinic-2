import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function BookingFooter() {
  const today = new Date().toISOString().split('T')[0];

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const message = `Hello! I would like to book a dental appointment.
    
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Preferred Date: ${data.date}
Concerns/Notes: ${data.concerns || 'None'}`;

    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <>
      <section id="booking" className="py-24 bg-brand-900 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-[100px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-700 rounded-full blur-[120px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Form Information */}
            <div className="text-white">
              <span className="text-brand-200 font-medium tracking-wider uppercase text-sm mb-4 block">Book Online</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Start Your Journey to a Better Smile</h2>
              <p className="text-brand-100 font-light text-lg mb-12 leading-relaxed">
                Schedule your consultation quickly and easily. Fill out the form, and we'll instantly connect you with our front desk via WhatsApp to confirm your slot.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-100" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Clinic Location</h4>
                    <p className="text-brand-200 font-light">123 Health Avenue, Medical District<br/>Cityplace, CP 10010</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-100" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Working Hours</h4>
                    <p className="text-brand-200 font-light">Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Emergency Only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-100" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Direct Contact</h4>
                    <p className="text-brand-200 font-light">+91 7499641082</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl"
            >
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                    <input required name="phone" type="tel" defaultValue="+91 " className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service Required *</label>
                  <select required name="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
                    <option value="">Select a service</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Teeth Reshaping">Teeth Reshaping</option>
                    <option value="Smile Designing">Smile Designing</option>
                    <option value="Whitening">Teeth Whitening</option>
                    <option value="Orthodontics">Orthodontics / Braces</option>
                    <option value="Other">Other Concern</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Date *</label>
                  <input required name="date" type="date" min={today} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Additional Concerns (Optional)</label>
                  <textarea name="concerns" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none" placeholder="Tell us how we can help you..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-800 hover:bg-brand-900 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-xl group">
                  Book via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-950 text-brand-200 py-12 border-t border-brand-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-800 rounded-xl flex items-center justify-center text-white">
              <span className="font-serif font-bold text-xl">D</span>
            </div>
            <span className="font-serif font-semibold text-xl text-white tracking-tight">
              Dental Clinic
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-sm font-light text-brand-400">
            &copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
