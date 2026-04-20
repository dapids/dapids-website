import { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: Props) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
)
