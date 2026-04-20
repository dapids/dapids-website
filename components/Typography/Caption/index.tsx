import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  as?: 'div' | 'span' | 'p'
  children: ReactNode
  className?: string
  weight?: '300' | '400' | '500'
}

export const Caption = ({ as: Component = 'div', children, className = '', weight = '300' }: Props) => {
  const classes = [
    styles.caption,
    weight === '300' ? styles.captionWeight300 : weight === '400' ? styles.captionWeight400 : styles.captionWeight500,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}
