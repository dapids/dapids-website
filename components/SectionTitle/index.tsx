import { Heading as HeadingBase } from 'components/Typography/Heading'
import styles from './index.module.css'
import { makeKebabCase } from 'utils/makeKebabCase'

export const SectionTitle = ({ children }: { children: string }) => (
  <>
    <div id={makeKebabCase(children)} className={styles.anchor}></div>
    <HeadingBase className={styles.heading}>{children}</HeadingBase>
  </>
)
