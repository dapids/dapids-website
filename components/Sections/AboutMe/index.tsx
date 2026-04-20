import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import { Mark } from 'components/Typography/Mark'
import { useViewportSize } from 'hooks/useViewportSize'
import styles from './index.module.css'

const yearsOfExperience = new Date().getFullYear() - 2006

export const AboutMe = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <Flex direction={direction}>
        <Flex shrink="0" className={styles.pictureWrapper}>
          <div className={styles.picture} />
        </Flex>
        <Flex grow="1" shrink="1">
          <Body weight="400" className={styles.paragraph}>
            Hey, I'm David! 👋🏻
          </Body>
          <Body weight="400" className={styles.paragraph}>
            I'm a <Mark>Software Engineer</Mark> and <Mark>Engineering Leader</Mark> with {yearsOfExperience} years in
            the industry. I'm driven by building high-quality software, fostering collaborative teams, and mentoring
            engineers who care about their craft.
          </Body>
          <Body weight="400" className={styles.paragraph}>
            Currently, I'm leading an exceptional engineering team at <Mark>ProntoPro</Mark>, where we're creating the
            best service marketplace experience in Europe.
          </Body>
          <Body weight="400" className={styles.paragraph}>
            I'm deeply passionate about <Mark>clean code and architectures</Mark>, <Mark>Agile development</Mark>, and{' '}
            <Mark>engineering excellence</Mark>.
          </Body>
          <Body weight="400" className={styles.paragraph}>
            I regularly share insights and lessons learned on{' '}
            <Link href="https://medium.com/@dapids17" target="_blank">
              Medium
            </Link>
            .
          </Body>
        </Flex>
      </Flex>
    </>
  )
}
