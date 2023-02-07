import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import { Mark } from 'components/Typography/Mark'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const PictureWrapper = styled(Flex).attrs({
  shrink: '0',
})`
  margin: 0 auto 32px;
  padding: 0 40px;
`

const Picture = styled.div`
  background-image: url('/my-picture.jpg');
  background-position: center;
  background-repeat: repeat, no-repeat;
  background-size: cover;
  border: 4px solid #ccc;
  border-radius: 100px;
  display: block;
  height: 200px;
  width: 200px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 8px;
`

const yearsOfExperience = new Date().getFullYear() - 2006

export const AboutMe = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <Flex direction={direction}>
        <PictureWrapper>
          <Picture />
        </PictureWrapper>
        <Flex grow="1" shrink="1">
          <Paragraph>Hi! My name is David. 👋🏻</Paragraph>
          <Paragraph>
            I'm a <Mark>Software Engineering</Mark> enthusiast with{' '}<Mark>{yearsOfExperience} years of experience</Mark> in the field and I'm especially passionate about clean code, functional programming, and engineering management.
          </Paragraph>
          <Paragraph>
            I'm currently leading a super-talented Engineering team @ ProntoPro, building the best service marketplace in Europe.
          </Paragraph>
          <Paragraph>
            In my life, I lived in the following towns - in the following order: Angri 🇮🇹, Sant'Antonio Abate 🇮🇹, Urbino 🇮🇹, Camerino 🇮🇹, Reykjavik 🇮🇸, Kalisz 🇵🇱, Poznan 🇵🇱,
            Warsaw 🇵🇱, Ancona 🇮🇹, Milan 🇮🇹, Rome 🇮🇹.
          </Paragraph>
        </Flex>
      </Flex>
    </>
  )
}
