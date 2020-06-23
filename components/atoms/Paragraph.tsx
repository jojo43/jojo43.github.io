import React from 'react'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
}

export function Paragraph({ children }: Props) {
  return (
    <Typography paragraph variant="body1">
      {children}
    </Typography>
  )
}
