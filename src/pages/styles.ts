import { styled } from '@/styles'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem 8rem',
  maxWidth: '1440px',
  margin: '0 auto',
})

export const Card = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5rem',
})

export const Title = styled('h1', {
  fontFamily: 'Baloo 2',
  fontWeight: 'bold',
  fontSize: '1.75rem',
})

export const Subtitle = styled('p', {
  marginTop: '1rem',
  color: '$gray300',
})
