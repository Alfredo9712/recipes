import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Container } from "~/components/Container";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
