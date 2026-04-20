import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

export const Display = ({ as: Component = 'div', children, className = '' }: Props) => (
  <Component className={`${styles.display} ${className}`}>{children}</Component>
)
