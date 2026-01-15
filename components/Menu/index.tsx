import { Container as ContainerBase } from 'components/Container'
import { Flex } from 'components/Flex'
import { Link as LinkBase } from 'components/Link'
import { useScrolled } from 'hooks/useScrolled'
import { useScrollPositionY } from 'hooks/useScrollPositionY'
import { useViewportSize } from 'hooks/useViewportSize'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { makeKebabCase } from 'utils/makeKebabCase'

type WrapperProps = {
  scrolled: boolean
}

const Wrapper = styled.div<WrapperProps>`
  background: ${({ scrolled }) => (scrolled ? 'rgba(230, 230, 230, 0.95)' : '#222')};
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 10;
`

const Container = styled(ContainerBase)`
  display: flex;
  padding: 8px 0;
`

type InnerProps = {
  scrolled: boolean
  small: boolean
}

const Inner = styled(Flex).attrs({
  direction: 'row',
})<InnerProps>`
  flex-grow: ${({ scrolled, small }) => (small || scrolled ? 1 : 0)};
  font-size: 1.6rem;
  justify-content: space-between;
  padding: 8px;
  transition: all 0.3s;
`

type LinkProps = {
  active: boolean
  scrolled: boolean
  small: boolean
}

const Link = styled(LinkBase)<LinkProps>`
  color: ${({ scrolled }) => (scrolled ? '#222' : '#e6e6e6')};
  margin: 0 8px;
  position: relative;

  &:active,
  &:hover {
    text-decoration: none;
  }

  &::before {
    content: '|';
    display: ${({ scrolled, small }) => (small || scrolled ? 'none' : 'visible')};
    left: -10px;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:first-child::before {
    display: none;
  }

  &::after {
    background: ${({ scrolled }) => (scrolled ? '#222' : 'rgba(230,230,230,0.8)')};
    bottom: -4px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: all 0.3s;
    width: ${({ active }) => (active ? '100%' : 0)};
  }

  @media (hover: hover) {
    &:hover::after {
      width: 100%;
    }
  }
`

type Section = {
  anchor: string
  id: string
  label: string
  element: HTMLElement | null
}

export const Menu = () => {
  const [sections, setSections] = useState<Section[]>()
  const viewportSize = useViewportSize()
  const scrolled = useScrolled()
  const scrollPositionY = useScrollPositionY()

  useEffect(() => {
    const sections = ['About me', 'Experience', 'Education', 'Articles & talks']
      .map((label) => ({
        label,
        id: makeKebabCase(label),
      }))
      .map((section) => ({
        ...section,
        anchor: `#${section.id}`,
        element: document.getElementById(section.id),
      }))

    setSections(sections)
  }, [])

  if (!sections) {
    return null
  }

  const currentSection = sections
    .filter(({ element }) => element ? scrollPositionY >= element.getBoundingClientRect().top - 2 + scrollPositionY : scrollPositionY)
    .reverse()[0]

  return (
    <Wrapper scrolled={scrolled}>
      <Container>
        <Inner scrolled={scrolled} small={viewportSize === 'small'}>
          {sections.map(({ anchor, id, label }) => (
            <Link
              key={id}
              active={currentSection && currentSection.id === id}
              href={anchor}
              scrolled={scrolled}
              small={viewportSize === 'small'}
            >
              {label}
            </Link>
          ))}
        </Inner>
      </Container>
    </Wrapper>
  )
}
