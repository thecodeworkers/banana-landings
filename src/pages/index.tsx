import { Navbar, Footer } from '@/components';
import { Hero, AboutUs, Services, Products, Portfolio, Contact } from '@/containers';

import styles from './styles.module.scss';
import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const productsRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const refs = {
    aboutUs: aboutRef,
    services: servicesRef,
    products: productsRef,
    portfolio: portfolioRef,
    contact: contactRef
  }

  return (
    <>
      <Navbar refs={refs} />

      <main className={styles._main}>
        <Hero />
        <AboutUs ref={aboutRef} />
        <Services ref={servicesRef} />
        <Products ref={productsRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}
