import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 2px dashed #e6e6e6;
  margin-top: 32px;
  padding: 32px 48px 16px;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      This website was baked with ❤️, TypeScript, React, styled-components, and Next.js.
    </Caption>
  </Wrapper>
)
