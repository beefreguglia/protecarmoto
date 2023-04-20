import { styled } from '@/styles'

export const WhatsappButtonContainer = styled('button', {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: ' center',
  borderRadius: '10px',
  cursor: 'pointer',
  color: '$green500',
  backgroundColor: '$gray700',
  lineHeight: 0,
  padding: '0.5rem',
  border: 'none',
  '&:hover': {
    backgroundColor: '$gray950',
    transition: 'background-color 300ms',
  },
})
