import { Navbar, Footer } from '@/components';
import { Hero, AboutUs, Services, Products, Portfolio, Contact } from '@/containers';

import styles from './styles.module.scss';
import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    aboutUs: aboutRef,
    services: servicesRef,
    products: productsRef,
    portfolio: portfolioRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar refs={refs} />

      <main className={styles._main}>
        <Hero />
        <Paragraph content={'THERE’S TWO WAYS TO APROACH YOUR PROJECT, CHOOSE THE ONE THAT BEST FITS YOUR NEEDS'} />

        <AboutUs ref={aboutRef} />
        <Paragraph
          content={
            'IS A TEAM OF EXPERTS FORMED BY SPECIALISTS IN SYSTEM ENGINEERING, UI-UX DESIGN, INFRASTRUCTURE AND INFORMATION SECURITY.'
          }
          bolded={'BANANA TECH'}
        />
        <Services ref={servicesRef} />
        <Products ref={productsRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}
