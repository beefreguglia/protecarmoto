import { keyframes, styled } from '@/styles'

const Up = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-1rem)' },
})

export const CardContainer = styled('div', {
  backgroundColor: '$gray950',
  width: '100%',
  padding: '2.5rem',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',

  '.image': {
    marginTop: '-120px',
    '&:hover': {
      animation: `${Up} 300ms ease-in-out forwards`,
    },
  },

  h2: {
    marginTop: '2rem',
    fontSize: '1.5rem',
  },

  p: {
    marginTop: '0.5rem',
  },

  button: {
    marginTop: '1rem',
    padding: '0.7rem',
    width: '60%',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '$yellow500',
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',

    '&:hover': {
      opacity: '0.8',
      transition: 'opacity 300ms',
    },
  },
})
