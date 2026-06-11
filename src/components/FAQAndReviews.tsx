import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    review: "The Smile Designing treatment completely changed my life. I used to be so self-conscious, but now I can't stop smiling. The team was gentle and highly professional.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    review: "I had my teeth reshaped here, and the results are incredible. It was completely painless, and the clinic's environment feels premium and relaxing.",
    rating: 5
  },
  {
    name: "Priya Patel",
    review: "Best dental experience I've ever had. They explained every step of the checkup and didn't push unnecessary treatments. Highly trustworthy.",
    rating: 5
  }
];

const faqs = [
  {
    question: "How long does a Smile Designing procedure take?",
    answer: "The timeline varies depending on your specific needs, ranging from a couple of visits for simple veneers, to a few months for comprehensive alignments. We provide a customized timeline during your consultation."
  },
  {
    question: "Are your treatments painful?",
    answer: "Your comfort is our top priority. We use advanced microscopic dentistry, precise local anesthetics, and relaxing environments to ensure procedures are virtually painless."
  },
  {
    question: "How often should I get a routine checkup?",
    answer: "We recommend a comprehensive checkup and professional cleaning at least twice a year to maintain optimal oral health and prevent future issues."
  }
];

export default function FAQAndReviews() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-600 font-medium tracking-wider uppercase text-sm mb-4 block">Patient Stories</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">What Our Patients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-50 p-8 rounded-[2rem] relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <MessageSquareQuote className="w-12 h-12 text-brand-200 absolute top-8 right-8" />
                <p className="text-gray-700 italic leading-relaxed mb-6 font-light relative z-10">"{testimonial.review}"</p>
                <h4 className="font-serif font-bold text-brand-900">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border border-gray-100 rounded-2xl overflow-hidden transition-colors ${activeFaq === idx ? 'bg-brand-50 border-brand-100' : 'bg-white hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }}>
                    <ChevronDown className={`w-5 h-5 ${activeFaq === idx ? 'text-brand-600' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
