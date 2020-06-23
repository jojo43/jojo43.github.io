import React from 'react'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Headline({ children, component }: Props) {
  return (
    <Typography component={component} paragraph variant={component}>
      {children}
    </Typography>
  )
}
