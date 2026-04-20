import { Caption } from 'components/Typography/Caption'
import styles from './index.module.css'

export const Footer = () => (
  <div className={styles.wrapper}>
    <Caption as="span" weight="400">
      This website was baked with ❤️, TypeScript, React, CSS Modules, and Next.js.
    </Caption>
  </div>
)
