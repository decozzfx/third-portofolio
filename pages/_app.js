import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/Main";
import theme from "../libs/theme";
import Fonts from "../components/Fonts";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
    <Fonts />
      <Main router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
