import styled from 'styled-components'
import { Theme } from '@material-ui/core/styles'

export const Blockquote = styled.blockquote`
  ${({ theme }: { theme: Theme }) => `
    border-left: 0.25em solid ${theme.palette.divider};
    color: ${theme.palette.text.secondary};
    margin: 0;
    margin-bottom: 16px;
    padding: 0 1em;
  `}
`
