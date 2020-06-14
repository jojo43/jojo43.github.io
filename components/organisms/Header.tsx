import React from 'react'
import Link from 'next/link'
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Toolbar,
  styled,
} from '@material-ui/core'
import { GitHub as GitHubIcon, Home as HomeIcon } from '@material-ui/icons'

import { DarkThemeSwitch, Spacer } from '~/components/atoms'
import { ThemeContext } from '~/utils/hooks'

export function Header() {
  const { theme } = React.useContext(ThemeContext)

  const StyledDivider = styled(Divider)({
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  })

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Link href="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <StyledDivider flexItem orientation="vertical" />
        <Link href="/about">
          <Button>About</Button>
        </Link>
        <Link href="/archives">
          <Button>Archives</Button>
        </Link>
        <Spacer />
        <a
          href="https://github.com/jojo43/jojo43.github.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
        <DarkThemeSwitch />
      </Toolbar>
    </AppBar>
  )
}
