import { ClerkProvider } from "@clerk/nextjs";

import { Container } from "~/components/Container";
import Head from "next/head";

import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Container>
        <Head>
          <title>TRPC Recipes</title>
          <meta name="description" content="🥗" />
          <link rel="icon" href="/recipes.icon.png" />
        </Head>
        <Component {...pageProps} />
      </Container>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
