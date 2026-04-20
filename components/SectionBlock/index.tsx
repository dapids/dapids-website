import { Flex } from 'components/Flex'
import { Body } from 'components/Typography/Body'
import { HeadingSmall as HeadingSmallBase } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import type { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  last?: boolean
  primaryInformation: ReactNode
  secondaryInformation: ReactNode
  subtitle: string
  title: string
}

export const SectionBlock = ({
  children,
  last = false,
  primaryInformation,
  secondaryInformation,
  subtitle,
  title,
}: Props) => {
  const viewportSize = useViewportSize()
  const wrap = viewportSize === 'small' ? 'wrap' : 'nowrap'

  return (
    <Body weight="400" className={last ? styles.wrapperLast : styles.wrapper}>
      <Flex direction="row" wrap={wrap}>
        <Flex basis="360px" grow="0" shrink="0" className={styles.information}>
          <HeadingSmallBase weight="500" className={styles.headingSmall}>
            {title}
          </HeadingSmallBase>
          <Body weight="500">{subtitle}</Body>
          <Body>{primaryInformation}</Body>
          <Body>{secondaryInformation}</Body>
        </Flex>

        <Flex grow="1" shrink="1" className={viewportSize === 'small' ? styles.detailSmall : styles.detailLarge}>
          {children}
        </Flex>
      </Flex>
    </Body>
  )
}
