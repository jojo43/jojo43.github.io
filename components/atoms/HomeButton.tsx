import React from 'react'
import { IconButton } from '@material-ui/core'
import { Home } from '@material-ui/icons'

type Props = {
  onClick?: () => void
}

export function HomeButton({ onClick }: Props) {
  return (
    <IconButton onClick={onClick}>
      <Home />
    </IconButton>
  )
}
