import React from 'react'
import styled from 'styled-components'
import { Theme, Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H6 = styled(({ children, className }: Props) => (
  <Typography className={className} component="h6" paragraph variant="h6">
    {children}
  </Typography>
))`
  ${({ theme }: { theme: Theme }) => `
    color: ${theme.palette.text.secondary};
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 24px;
  `}
`
