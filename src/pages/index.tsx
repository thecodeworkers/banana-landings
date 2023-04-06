import { Navbar, FirstBanner, SecondBanner, Services, Products, Portfolio, Contact, Footer } from '@/components';
import { useRef } from 'react';
import styles from './styles.module.scss';

export default function Home() {
  const services = useRef(null);
  return (
    <>
      <Navbar />

      <main className={styles._main}>
        <FirstBanner />
        <SecondBanner />

        <Services />

        <Products />
        <Portfolio />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}
