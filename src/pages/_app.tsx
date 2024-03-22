import '../../public/styles/global.scss';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GoogleTagManager } from '@next/third-parties/google'

const client = new ApolloClient({
  uri: 'https://wordpress.bananacreative.tech/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {

  const gtmSrc = () => {
    if (pageProps.domain === "TECH") {return "GTM-5BCWD79K"}
    else if (pageProps.domain === "BRAND") {return "GTM-NKH3343V"}
    else if (pageProps.domain === "MOTION") {return "GTM-NQDRFWW4"}
    else if (pageProps.domain === "PRODUCTION") {return "GTM-PD6S6XWG"}
    else {return ""}
  }

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId={gtmSrc()}/>
      </ApolloProvider>
    </>
  );
}

export async function getStaticProps() {
  const domain: string = process.env.DOMAIN || 'TECH';

  return {
    props: {
      domain,
    },
  };
}
