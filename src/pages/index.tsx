import { Navbar } from '@/components';
import { Hero, AboutUs, Services, Products, Portfolio, Contact, Paragraph, Packs } from '@/containers';

import styles from './styles.module.scss';
import { useRef } from 'react';

import content from '@/content/data.json';

type DomainType = keyof typeof content;

export default function Home({ data, domain }: any) {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const packsRef = useRef(null);
  const weDoRef = useRef(null);

  const refs = {
    aboutUs: aboutRef,
    services: servicesRef,
    products: productsRef,
    portfolio: portfolioRef,
    contact: contactRef,
    packs: packsRef,
    weDo: weDoRef,
  };

  return (
    <>
      <Navbar data={data?.navbar} refs={refs} />

      <main className={styles._main}>
        <Hero data={data?.hero} action={contactRef} />
        <Paragraph {...data?.firstParagraph} ref={aboutRef} />
        <AboutUs {...data?.aboutUs} ref={weDoRef} />

        {data?.secondParagraph.content && <Paragraph {...data?.secondParagraph} />}

        {domain === 'TECH' && <Services {...data?.services} ref={servicesRef} />}

        <Packs {...data?.packs} {...data?.general} ref={packsRef} />
        <Packs {...data?.secondPacks} {...data?.general} ref={packsRef} />
        <Products {...data?.products} ref={productsRef} />
        <Portfolio {...data?.portfolio} ref={portfolioRef} />
        <Contact {...data?.contactUs} {...data?.general} ref={contactRef} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const domain: string = process.env.DOMAIN || 'TECH';

  return {
    props: {
      data: content[domain as DomainType],
      domain
    },
  };
}
