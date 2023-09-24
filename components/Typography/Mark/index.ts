import styled from 'styled-components'
import { GlobalStyle } from '../../GlobalStyle'

export const Mark = styled.mark`
  background-color: ${({ theme }: GlobalStyle) => theme.text};
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 ${({ theme }: GlobalStyle) => theme.text};
  color: ${({ theme }: GlobalStyle) => theme.body};
  font-size: 90%;
  padding: 2px 4px;
`
