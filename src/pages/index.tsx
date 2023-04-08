import { Navbar, FirstBanner, SecondBanner, Services, Products, Portfolio, Contact, Footer } from '@/components';

import styles from './styles.module.scss';

export default function Home() {
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
      <Footer />
    </>
  );
}
