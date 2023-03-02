import { ReactElement } from 'react'
import { PinRoot } from './styles'

interface PinRootProps {
  children: ReactElement
  text: string
}

export function PinRhoot({ children, text }: PinRootProps) {
  return (
    <PinRoot>
      {children}
      <p>{text}</p>
    </PinRoot>
  )
}
