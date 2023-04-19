import { keyframes, styled } from '@/styles'
import Image from 'next/image'

const fadeLeft = keyframes({
  '0%': { opacity: '0', transform: 'translateX(5rem)' },
  '100%': { opacity: '1', transform: 'translateX(0)' },
})

const fadeRight = keyframes({
  '0%': { opacity: '0', transform: 'translateX(-5rem)' },
  '100%': { opacity: '1', transform: 'translateX(0)' },
})

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1440px',
  margin: '0 auto',
})

export const BannerContainer = styled('div', {
  display: 'flex',
  width: '100%',
  padding: '5rem 8rem',
  alignItems: 'center',
  gap: '4rem',
  justifyContent: 'space-between',
  background: '$gray800',

  '@media(max-width: 800px)': {
    padding: '5rem 3rem',
  },
})

export const TitleContainer = styled('div', {
  maxWidth: '800px',
  zIndex: '2',
  animation: `${fadeRight} 400ms`,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  h2: {
    color: '$gray100',
    fontSize: '3rem',
    textShadow: '1px 1px 1px $red500',
  },
  h3: {
    fontSize: '1.5rem',
    color: '$gray200',
    textShadow: '1px 1px 1px $red500',
    marginTop: '1rem',
  },

  '@media(max-width: 1300px)': {
    maxWidth: '100%',
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.3rem',
    },
  },

  '@media(max-width: 800px)': {
    h2: {
      fontSize: '1.3rem',
    },
    h3: {
      fontSize: '1rem',
    },
  },
})

export const ImageContainer = styled('div', {
  zIndex: '2',

  animation: `${fadeLeft} 400ms`,
  '@media(max-width: 800px)': {
    display: 'none',
  },
})

export const StyledImage = styled(Image, {})

export const PinsContainer = styled('div', {
  width: '100%',
  marginTop: '5rem',

  '.firstContainer': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    display: 'grid',
    justifyContent: 'center',
    gap: '3rem',
    padding: '0 10%',
    '@media(max-width: 1000px)': {
      gridTemplateColumns: '1fr',
    },
  },

  '.secondContainer': {
    gridTemplateColumns: 'repeat(5, 1fr)',
    display: 'grid',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '3rem',
    '@media(max-width: 1000px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const CardsContainer = styled('div', {
  marginTop: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',

  '@media(max-width: 1000px)': {
    flexDirection: 'column',
    padding: '0 2rem',
  },
})
