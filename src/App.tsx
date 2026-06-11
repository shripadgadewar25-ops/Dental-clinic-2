import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GalleryAndAbout from './components/GalleryAndAbout';
import FAQAndReviews from './components/FAQAndReviews';
import BookingFooter from './components/BookingFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <GalleryAndAbout />
        <FAQAndReviews />
        <BookingFooter />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
