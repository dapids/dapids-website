import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'ts-debounce'

const getWindowScroll = () => typeof window === 'undefined' ? 0 : self.scrollY

export const useScrollPositionY = () => {
  const [scrollPositionY, setScrollPositionY] = useState(getWindowScroll())

  const onScroll: EventListener = useCallback(
    debounce(() => {
      setScrollPositionY(getWindowScroll())
    }, 50),
    [],
  )

  useEffect(() => {
    self.addEventListener('scroll', onScroll)

    return () => {
      self.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollPositionY
}
