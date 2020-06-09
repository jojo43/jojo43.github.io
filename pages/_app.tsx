import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { TITLE, theme } from '~/settings'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
