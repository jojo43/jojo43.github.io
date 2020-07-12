import React from 'react'
import styled from 'styled-components'
import { Theme, Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H2 = styled(({ children, className }: Props) => (
  <Typography className={className} component="h2" paragraph variant="h2">
    {children}
  </Typography>
))`
  ${({ theme }: { theme: Theme }) => `
    border-bottom: 1px solid ${theme.palette.divider};
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 24px;
    padding-bottom: 0.3rem;
  `}
`
