import styled from 'styled-components'
import { Theme } from '@material-ui/core/styles'

export const InlineCode = styled.code`
  ${({ theme }: { theme: Theme }) => `
    background-color: ${theme.palette.action.hover};
    border-radius: ${theme.shape.borderRadius}px;
    padding: .2em .4em;
  `}
`
