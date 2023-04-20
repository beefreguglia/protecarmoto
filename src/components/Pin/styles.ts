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
  maxHeight: '600px',
  padding: '0 2rem',

  '&[data-time="1"]': {
    animation: `${fadeDown} 300ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="2"]': {
    animation: `${fadeDown} 400ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="3"]': {
    animation: `${fadeDown} 500ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="4"]': {
    animation: `${fadeDown} 600ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="5"]': {
    animation: `${fadeDown} 700ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="6"]': {
    animation: `${fadeDown} 800ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="7"]': {
    animation: `${fadeDown} 900ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="8"]': {
    animation: `${fadeDown} 650ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
  },
  '&[data-time="9"]': {
    animation: `${fadeDown} 700ms`,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-1rem)',
    },
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
