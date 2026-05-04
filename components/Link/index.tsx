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
  (() => {
    const relValues = new Set((rel ?? '').split(' ').filter(Boolean))

    if (target === '_blank') {
      relValues.add('noopener')
      relValues.add('noreferrer')
    }

    const computedRel = relValues.size > 0 ? Array.from(relValues).join(' ') : undefined

    return (
      <a className={`${styles.link} ${className}`} href={href} rel={computedRel} target={target}>
        {children}
      </a>
    )
  })()
)
