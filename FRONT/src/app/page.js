'use client';
import Hero from 'components/Hero';
import CardsSection from 'components/Cards';
import AboutSection from 'components/About';
import ContactSection from 'components/Contact';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Homemade_Apple, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const homemade = Homemade_Apple({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-homemade',
});

export default function Home() {
  return (
    <>
      <main className={`${poppins.variable} font-poppins ${homemade.variable} font-homemade`}>
        <Navbar />        
        <Hero></Hero>
        <CardsSection></CardsSection>
        <AboutSection />
        <ContactSection />
        <Footer></Footer>
      </main>
    </>
  );
}
