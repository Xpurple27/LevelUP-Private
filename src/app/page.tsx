
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Advantages } from '@/components/sections/advantages';
import { Gallery } from '@/components/sections/gallery';
import { Testimonials } from '@/components/sections/testimonials';
import { Results } from '@/components/sections/results';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Gallery />
        <Testimonials />
        <Results />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
