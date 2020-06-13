import React from 'react'
import Head from 'next/head'
import { Box, Container, Toolbar } from '@material-ui/core'

import { Header } from '~/components/organisms'
import { TITLE } from '~/settings'

type Props = {
  children: React.ReactNode
  title?: string
}

export function DefaultTemplate({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | ` : null}
          {TITLE}
        </title>
      </Head>
      <Header />
      <Toolbar />
      <Container>
        <Box my={2}>{children}</Box>
      </Container>
    </>
  )
}
