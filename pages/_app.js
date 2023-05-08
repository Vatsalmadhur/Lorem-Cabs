import React from 'react';
import Head from 'next/head';

import { MantineProvider } from '@mantine/core';

// import '../src/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flow cabs</title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Jost, sans-serif',
          colorScheme: 'light',
          headings: { fontFamily: 'Inter, sans-serif' },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
