import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  children: ReactNode
  className?: string
  fontStyle?: 'italic'
  weight?: '300' | '400' | '500'
}

export const HeadingSmall = ({ as: Component = 'div', children, className = '', fontStyle, weight = '300' }: Props) => {
  const classes = [
    styles.headingSmall,
    fontStyle === 'italic' ? styles.headingSmallItalic : '',
    weight === '300'
      ? styles.headingSmallWeight300
      : weight === '400'
        ? styles.headingSmallWeight400
        : styles.headingSmallWeight500,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}
