import { styled } from '@/styles'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem 8rem',
})

export const Card = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
})

export const Title = styled('h1', {
  fontFamily: 'Baloo 2',
  maxWidth: '720px',
})
