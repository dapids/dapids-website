import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import styled from 'styled-components'

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 4px;
`

export const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>
    <Paragraph>Work in progress.</Paragraph>
  </>
)
