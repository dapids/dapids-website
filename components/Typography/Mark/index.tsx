import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  className?: string
}

export const Mark = ({ children, className = '' }: Props) => (
  <mark className={`${styles.mark} ${className}`}>{children}</mark>
)
