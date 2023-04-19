import { keyframes, styled } from '@/styles'

const fadeDown = keyframes({
  '0%': { opacity: '0', transform: 'translateY(-5rem)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
})

export const PinContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  width: '100%',

  '&[data-time="1"]': {
    animation: `${fadeDown} 300ms`,
  },
  '&[data-time="2"]': {
    animation: `${fadeDown} 400ms`,
  },
  '&[data-time="3"]': {
    animation: `${fadeDown} 500ms`,
  },
  '&[data-time="4"]': {
    animation: `${fadeDown} 600ms`,
  },
  '&[data-time="5"]': {
    animation: `${fadeDown} 700ms`,
  },
  '&[data-time="6"]': {
    animation: `${fadeDown} 800ms`,
  },
  '&[data-time="7"]': {
    animation: `${fadeDown} 900ms`,
  },
  '&[data-time="8"]': {
    animation: `${fadeDown} 650ms`,
  },
  '&[data-time="9"]': {
    animation: `${fadeDown} 700ms`,
  },
})

export const PinTextContainer = styled('p', {
  color: '$red500',
  fontSize: '1rem',
  fontWeight: '600',
  textAlign: 'center',
})

export const PinIconContainer = styled('div', {
  color: '$red500',
})
