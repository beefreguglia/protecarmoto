import { styled } from '@/styles'

export const PinContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
})

export const PinTextContainer = styled('p', {
  color: '$red500',
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'center',
})

export const PinIconContainer = styled('div', {
  color: '$red500',
})
