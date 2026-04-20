import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  className?: string
}

export const List = ({ children, className = '' }: Props) => (
  <ul className={`${styles.list} ${className}`}>{children}</ul>
)
