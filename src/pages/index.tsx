import { Navbar, PopUp } from '@/components';
import Head from 'next/head';
import { Hero, AboutUs, Services, Products, Portfolio, Contact, Paragraph, Packs } from '@/containers';
import { useRouter } from 'next/router';
import useTranslation from "next-translate/useTranslation";

import styles from './styles.module.scss';
import { useMemo, useRef } from 'react';

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

  const { t } = useTranslation("common");

  const router = useRouter();

  const refs = {
    aboutUs: aboutRef,
    services: servicesRef,
    products: productsRef,
    portfolio: portfolioRef,
    contact: contactRef,
    packs: packsRef,
    weDo: weDoRef,
  };

  const gtmSrc = () => {
    if (domain === "TECH") {return "GTM-5BCWD79K"}
    else if (domain === "BRAND") {return "GTM-NKH3343V"}
    else if (domain === "MOTION") {return "GTM-NQDRFWW4"}
    else if (domain === "PRODUCTION") {return "GTM-PD6S6XWG"}
    else {return ""}
  }

  return (
    <>
      <Head>
        <title>{t(data?.metadata.title)}</title>
        {/*<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />*/}
        <meta name='description' content={t(data?.metadata.description)} key='desc' />
        <meta property='og:title' content={t(data?.metadata.title)} />
        <meta property='og:description' content={t(data?.metadata.description)} />
        <meta property='og:image' content={data?.metadata.ogImage} />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src=${gtmSrc()} height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}></noscript>

      <div className={styles._zContainer}>
        <Navbar data={data?.navbar} refs={refs} />

        <PopUp {...data?.popup} />
      </div>

      <main className={styles._main}>
        <Hero data={data?.hero} action={contactRef} />
        <Paragraph {...data?.firstParagraph} ref={aboutRef} />
        <AboutUs {...data?.aboutUs} ref={weDoRef} />

        {data?.secondParagraph?.content && <Paragraph {...data?.secondParagraph} />}

        {domain === 'TECH' && <Services {...data?.services} ref={servicesRef} />}

        <Packs {...data?.packs} {...data?.general} ref={packsRef} />
        {data?.secondPacks && <Packs {...data?.secondPacks} {...data?.general} ref={packsRef} />}
        <Products {...data?.products} ref={productsRef} />
        <Portfolio {...data?.portfolio} ref={portfolioRef} />
        <Contact {...data?.contactUs} {...data?.general} ref={contactRef} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const domain: string = process.env.DOMAIN || 'TECH';
  const gtmSrc: string = `https://www.googletagmanager.com/ns.html?id=${process.env.GTM}`;

  return {
    props: {
      data: content[domain as DomainType],
      domain,
    },
  };
}
