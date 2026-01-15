import { faGithub, faInstagram, faLinkedin, faMedium, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { Body } from 'components/Typography/Body'
import { Display } from 'components/Typography/Display'
import { HeadingSmall } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const Container = styled(Flex)`
  padding: 32px 0 24px;
`

const IconsContainer = styled(Flex)`
  margin: 24px 0;
`

type IconLinkProps = {
  small: boolean
}

const IconLink = styled(Link)<IconLinkProps>`
  align-items: center;
  border: 2px solid #e6e6e6;
  border-radius: 50%;
  background: #e6e6e6;
  box-shadow: inset 0 0 0 0px #222;
  color: #222;
  display: flex;
  height: ${({ small }) => (small ? '40px' : '55px')};
  justify-content: center;
  line-height: ${({ small }) => (small ? '40px' : '55px')};
  margin: ${({ small }) => (small ? '0 4px' : '0 0 0 16px')};
  transition: all 0.3s;
  width: ${({ small }) => (small ? '40px' : '55px')};

  &:hover {
    box-shadow: inset 0 0 0 35px #222;
    color: #e6e6e6;
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 30px;
`

export const Header = () => {
  const viewportSize = useViewportSize()
  const small = viewportSize === 'small'
  const direction = small ? 'column' : 'row'
  const leftAlign = small ? 'center' : 'flex-start'
  const rightAlign = small ? 'center' : 'flex-end'
  const iconSize = small ? '1x' : '3x'

  return (
    <Container align="center" as="header" direction={direction} justify="space-between">
      <Flex align={leftAlign}>
        <Display as="h1"> David Sorrentino</Display>
        <HeadingSmall as="h2">Director of Engineering @ {' '}
          <HeadingSmall as="span" weight="500">
            <Link href="//www.prontopro.it" target="_blank">
              ProntoPro
            </Link>
          </HeadingSmall>
        </HeadingSmall>
        <Body>Dreamer, hugger, karma-believer</Body>
      </Flex>

      <Flex align={rightAlign}>
        <IconsContainer direction="row">
          <IconLink href="//koalendar.com/e/meet-with-dapids" rel="nofollow" small={small} target="_blank">
            <Icon icon={faCalendarCheck} size={iconSize} />
          </IconLink>
          <IconLink href="//linkedin.com/in/dapids" rel="nofollow" small={small} target="_blank">
            <Icon icon={faLinkedin} size={iconSize} />
          </IconLink>
          <IconLink href="//medium.com/@dapids17" rel="nofollow" small={small} target="_blank">
            <Icon icon={faMedium} size={iconSize} />
          </IconLink>
          <IconLink href="//github.com/dapids" rel="nofollow" small={small} target="_blank">
            <Icon icon={faGithub} size={iconSize} />
          </IconLink>
          <IconLink href="//instagram.com/dapids17" rel="nofollow" small={small} target="_blank">
            <Icon icon={faInstagram} size={iconSize} />
          </IconLink>
          <IconLink href="//threads.net/@dapids17" rel="nofollow" small={small} target="_blank">
            <Icon icon={faThreads} size={iconSize} />
          </IconLink>
          <IconLink
            href="//twitter.com/dapidsorrentino"
            rel="nofollow"
            small={small}
            target="_blank"
          >
            <Icon icon={faXTwitter} size={iconSize} />
          </IconLink>
        </IconsContainer>

        <Body>Current location: Rome - Italy</Body>
      </Flex>
    </Container>
  )
}
