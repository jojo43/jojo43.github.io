import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H4 = styled(({ children, className }: Props) => (
  <Typography className={className} component="h4" paragraph variant="h4">
    {children}
  </Typography>
))`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 24px;
`
