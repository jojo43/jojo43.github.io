import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CssBaseline, NoSsr } from '@material-ui/core'
import { MDXProvider } from '@mdx-js/react'

import { ThemeProvider } from '~/utils/hooks'
import { components } from '~/utils/mdx'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NoSsr>
        <ThemeProvider>
          <MDXProvider components={components}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
            <CssBaseline />
          </MDXProvider>
        </ThemeProvider>
      </NoSsr>
    </>
  )
}
