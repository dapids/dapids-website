import { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  align?: 'center' | 'flex-end' | 'flex-start' | 'stretch'
  basis?: string
  children: ReactNode
  className?: string
  direction?: 'column' | 'row'
  grow?: '0' | '1'
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
  shrink?: '0' | '1'
  wrap?: 'nowrap' | 'wrap'
}

export const Flex = ({
  align,
  basis,
  children,
  className = '',
  direction = 'column',
  grow = '0',
  justify = 'flex-start',
  shrink = '0',
  wrap = 'nowrap',
}: Props) => {
  const alignClass = align
    ? { center: styles.alignCenter, 'flex-end': styles.alignEnd, 'flex-start': styles.alignStart, stretch: styles.alignStretch }[align]
    : styles.alignStart

  const directionClass = direction === 'row' ? styles.flexRow : styles.flexColumn

  const justifyClass = justify
    ? { center: styles.justifyCenter, 'flex-end': styles.justifyEnd, 'flex-start': styles.justifyStart, 'space-between': styles.justifyBetween }[justify]
    : styles.justifyStart

  const growClass = grow === '1' ? styles.grow1 : styles.grow0
  const shrinkClass = shrink === '1' ? styles.shrink1 : styles.shrink0
  const wrapClass = wrap === 'wrap' ? styles.wrapWrap : styles.wrapNowrap

  const style = basis ? { flexBasis: basis } : {}

  return (
    <div
      className={`${styles.flex} ${directionClass} ${alignClass} ${justifyClass} ${growClass} ${shrinkClass} ${wrapClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
