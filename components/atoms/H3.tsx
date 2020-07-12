import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H3 = styled(({ children, className }: Props) => (
  <Typography className={className} component="h3" paragraph variant="h3">
    {children}
  </Typography>
))`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 24px;
`
