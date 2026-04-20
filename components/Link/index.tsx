import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  className?: string
  href: string
  rel?: string
  target?: string
}

export const Link = ({ children, className = '', href, rel, target }: Props) => (
  <a className={`${styles.link} ${className}`} href={href} rel={rel} target={target}>
    {children}
  </a>
)
