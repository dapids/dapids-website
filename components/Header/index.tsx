import { faGithub, faInstagram, faLinkedin, faMedium, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { Body } from 'components/Typography/Body'
import { Display } from 'components/Typography/Display'
import { HeadingSmall } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import styles from './index.module.css'

interface IconLinkProps {
  children: React.ReactNode
  href: string
  rel?: string
  small: boolean
  target?: string
}

const IconLink = ({ children, href, rel, small, target }: IconLinkProps) => (
  <Link
    className={`${styles.iconLink} ${small ? styles.iconLinkSmall : styles.iconLinkLarge}`}
    href={href}
    rel={rel}
    target={target}
  >
    {children}
  </Link>
)

const Icon = ({ icon, size }: { icon: any; size: string }) => (
  <FontAwesomeIcon className={styles.icon} icon={icon} size={size as any} />
)

export const Header = () => {
  const viewportSize = useViewportSize()
  const small = viewportSize === 'small'
  const direction = small ? 'column' : 'row'
  const leftAlign = small ? 'center' : 'flex-start'
  const rightAlign = small ? 'center' : 'flex-end'
  const iconSize = small ? '1x' : '3x'

  return (
    <Flex align="center" direction={direction} justify="space-between" className={styles.container}>
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
        <Flex direction="row" className={styles.iconsContainer}>
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
        </Flex>

        <Body>Current location: Rome - Italy</Body>
      </Flex>
    </Flex>
  )
}
