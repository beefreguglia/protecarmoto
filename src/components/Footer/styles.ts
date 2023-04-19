import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  marginTop: '5rem',
  padding: '2.5rem',
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
  color: '$red500',
  display: 'flex',
  gap: '1rem',
})
