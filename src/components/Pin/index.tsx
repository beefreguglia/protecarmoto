import {
  BatteryChargingVertical,
  Drop,
  Gear,
  IconContext,
  LightningSlash,
  Lock,
  Money,
  Polygon,
  Rss,
  ShieldCheck,
} from 'phosphor-react'
import { ReactElement } from 'react'
import { PinContainer, PinIconContainer, PinTextContainer } from './styles'

interface PinRootProps {
  children: ReactElement[]
  time: number
}

export function PinRoot({ children, time }: PinRootProps) {
  return <PinContainer data-time={time}>{children}</PinContainer>
}

interface PinTextProps {
  text: string
}

export function PinText({ text }: PinTextProps) {
  return <PinTextContainer>{text}</PinTextContainer>
}

interface PinIconProps {
  icon:
    | 'Rss'
    | 'Battery'
    | 'Gear'
    | 'LightningSlash'
    | 'Lock'
    | 'Shield'
    | 'Drop'
    | 'Money'
    | 'Polygon'
}

export function PinIcon({ icon }: PinIconProps) {
  return (
    <IconContext.Provider
      value={{
        size: 32,
        mirrored: false,
      }}
    >
      <PinIconContainer>{icon === 'Rss' && <Rss />}</PinIconContainer>
      <PinIconContainer>
        {icon === 'Battery' && <BatteryChargingVertical />}
      </PinIconContainer>
      <PinIconContainer>
        {icon === 'LightningSlash' && <LightningSlash />}
      </PinIconContainer>
      <PinIconContainer>{icon === 'Gear' && <Gear />}</PinIconContainer>
      <PinIconContainer>{icon === 'Lock' && <Lock />}</PinIconContainer>
      <PinIconContainer>
        {icon === 'Shield' && <ShieldCheck />}
      </PinIconContainer>
      <PinIconContainer>{icon === 'Drop' && <Drop />}</PinIconContainer>
      <PinIconContainer>{icon === 'Money' && <Money />}</PinIconContainer>
      <PinIconContainer>{icon === 'Polygon' && <Polygon />}</PinIconContainer>
    </IconContext.Provider>
  )
}
