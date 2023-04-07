import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'ts-debounce'

const getViewportSize = (width: number) => {
  if (width < 800) {
    return 'small'
  }

  return 'large'
}

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState<ReturnType<typeof getViewportSize>>('small')

  const updateViewportSize: EventListener = useCallback(
    debounce(() => {
      const size = getViewportSize(window.innerWidth)

      setViewportSize(size)
    }, 200),
    [],
  )

  useEffect(() => {
    setViewportSize(getViewportSize(window.innerWidth))

    window.addEventListener('resize', updateViewportSize)

    return () => {
      window.removeEventListener('resize', updateViewportSize)
    }
  }, [])

  return viewportSize
}
