import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import { AuthProvider } from "src/auth/useAuth";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Head>
          <title>Home Sweet Home</title>
          <link ref="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}