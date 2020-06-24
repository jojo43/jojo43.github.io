import React from 'react'
import Head from 'next/head'
import { Box, Container, Toolbar } from '@material-ui/core'

import { Headline } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { TITLE } from '~/settings'

type Props = {
  children: React.ReactNode
  title?: string
}

export function BlogTemplate({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>
          {title && `${title} | `}
          {TITLE}
        </title>
      </Head>
      <Header />
      <Toolbar />
      <Container maxWidth="md">
        <Box my={3}>
          {title && <Headline component="h1">{title}</Headline>}
          {children}
        </Box>
      </Container>
    </>
  )
}
