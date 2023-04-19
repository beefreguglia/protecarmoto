import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  marginTop: '5rem',
  padding: '2.5rem 6rem',
  width: '100%',
  backgroundColor: '$gray950',

  '> div': {
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '> p': {
      fontSize: '0.8rem',
    },
  },
})

export const SocialMedias = styled('div', {
  display: 'flex',
  gap: '1rem',

  '> button': {
    color: '$red500',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    lineHeight: 0,
    '&:hover': {
      transition: 'transform 300ms ease-in-out',
      transform: 'translateY(-0.5rem)',
    },
  },
})
