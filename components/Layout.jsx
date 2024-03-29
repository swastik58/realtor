import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from './Footer';

import Navbar from './Navbar'


const Layout = ({ children }) => (
    <>
        <Head>
        <title>REALTOR</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
)

export default Layout