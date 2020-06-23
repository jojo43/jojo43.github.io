import React from 'react'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
}

export function ListItem({ children }: Props) {
  return (
    <li>
      <Typography component="div" variant="body1">
        {children}
      </Typography>
    </li>
  )
}
