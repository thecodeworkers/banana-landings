import { Navbar, Footer } from '@/components';
import { Hero, AboutUs, Services, Products, Portfolio, Contact, Paragraph } from '@/containers';

import styles from './styles.module.scss';
import { useRef } from 'react';

import content from '@/content/data.json'

type DomainType = keyof typeof content

export default function Home({ data }: any) {
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
        <Hero data={data.hero} />
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

export async function getStaticProps() {
  // const domain: string = process.env.DOMAIN || "TECH"
  const domain: string = "TECH"

  return {
    props: {
      data: content[domain as DomainType]
    }
  }
}