import React from 'react'
import { Box, Container, Toolbar } from '@material-ui/core'

import { Header } from '~/components/organisms'

type Props = {
  children: React.ReactNode
}

export function DefaultTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <Toolbar />
      <Container>
        <Box my={2}>{children}</Box>
      </Container>
    </>
  )
}
