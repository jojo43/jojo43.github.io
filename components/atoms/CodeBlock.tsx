import React from 'react'
import styled from 'styled-components'
import Highlight from 'react-syntax-highlighter'
import {
  tomorrow,
  tomorrowNight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Theme } from '@material-ui/core/styles'

import { ThemeContext } from '~/utils/hooks'

type Props = {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className }: Props) {
  const { theme } = React.useContext(ThemeContext)

  const language = className?.replace(/language-/, '') || 'text'
  const style = theme.palette.type === 'dark' ? tomorrowNight : tomorrow

  return (
    <StyledHighlight language={language} style={style}>
      {children}
    </StyledHighlight>
  )
}

const StyledHighlight = styled(Highlight)`
  ${({ theme }: { theme: Theme }) => `
    border-radius: ${theme.shape.borderRadius}px;
    font-size: 1rem;
    line-height: 1.5;
    padding: 16px !important;
    margin: 16px 0;
  `}
`
