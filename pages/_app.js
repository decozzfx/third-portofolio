import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/Main";
import theme from "../libs/theme";
import Fonts from "../components/Fonts";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import CvLayout from "../components/layouts/Cv";

function MyApp({ Component, pageProps, router }) {
  const pathname = pageProps.pathname || router.pathname;
  const noLayoutPages = ["/cv"];

  if (noLayoutPages.includes(pathname)) {
    return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <CvLayout router={router}>
          <Component {...pageProps} key={router.route} />
        </CvLayout>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence mode="popLayout" initial={true}>
          <NextNProgress />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
