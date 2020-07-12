import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H5 = styled(({ children, className }: Props) => (
  <Typography className={className} component="h5" paragraph variant="h5">
    {children}
  </Typography>
))`
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 24px;
`
