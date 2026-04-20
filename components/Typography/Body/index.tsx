import { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  as?: 'div' | 'p' | 'span'
  children: ReactNode
  className?: string
  fontStyle?: 'italic'
  weight?: '300' | '400' | '500'
}

export const Body = ({
  as: Component = 'div',
  children,
  className = '',
  fontStyle,
  weight = '300',
}: Props) => {
  const classes = [
    styles.body,
    fontStyle === 'italic' ? styles.bodyItalic : '',
    weight === '300' ? styles.bodyWeight300 : weight === '400' ? styles.bodyWeight400 : styles.bodyWeight500,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}
