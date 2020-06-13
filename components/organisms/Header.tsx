import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Button, Divider, Toolbar, styled } from '@material-ui/core'

import { DarkThemeSwitch, HomeButton, Spacer } from '~/components/atoms'
import { ThemeContext } from '~/utils/hooks'

export function Header() {
  const router = useRouter()
  const { theme } = React.useContext(ThemeContext)

  const StyledDivider = styled(Divider)({
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  })

  return (
    <AppBar color="inherit">
      <Toolbar>
        <HomeButton onClick={() => router.push('/')} />
        <StyledDivider flexItem orientation="vertical" />
        <Link href="/style">
          <Button>Style</Button>
        </Link>
        <Spacer />
        <DarkThemeSwitch />
      </Toolbar>
    </AppBar>
  )
}
