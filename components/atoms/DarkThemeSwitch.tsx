import React from 'react'
import { IconButton, NoSsr, Tooltip, styled } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'
import { Brightness2, Brightness7 } from '@material-ui/icons'

import { ThemeContext } from '~/utils/hooks'

export function DarkThemeSwitch() {
  const { theme, toggleDark } = React.useContext(ThemeContext)

  return (
    <Tooltip title="Toggle light/dark theme">
      <IconButton onClick={() => toggleDark()}>
        <NoSsr fallback={<SunIcon />}>
          {theme.palette.type === 'dark' ? <MoonIcon /> : <SunIcon />}
        </NoSsr>
      </IconButton>
    </Tooltip>
  )
}

const SunIcon = styled(Brightness7)({
  color: yellow[700],
})

const MoonIcon = styled(Brightness2)({
  color: yellow[500],
})
