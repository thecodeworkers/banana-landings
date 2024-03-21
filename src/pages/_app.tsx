import '../../public/styles/global.scss';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GoogleTagManager } from '@next/third-parties/google'

const client = new ApolloClient({
  uri: 'https://wordpress.bananacreative.tech/graphql',
  cache: new InMemoryCache(),
});

const domain: string = process.env.DOMAIN || 'TECH';

const gtmSrc = () => {
  if (domain === "TECH") {return "GTM-5BCWD79K"}
  else if (domain === "BRAND") {return "GTM-NKH3343V"}
  else if (domain === "MOTION") {return "GTM-NQDRFWW4"}
  else if (domain === "PRODUCTION") {return "GTM-PD6S6XWG"}
  else {return ""}
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId={gtmSrc()}/>
      </ApolloProvider>
    </>
  );
}
