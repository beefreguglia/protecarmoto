import { styled } from '@/styles'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '.SeparatorRoot': {
    marginTop: '3rem',
    backgroundColor: '$gray200',
    alignSelf: 'center',
  },
  '.SeparatorRoot[data-orientation="horizontal"]': {
    height: '2px',
    width: '60%',
  },
  '.SeparatorRoot[data-orientation="vertical"]': {
    height: '100%',
    width: '1px',
  },
})

export const BannerContainer = styled('div', {
  width: '100%',
  height: '600px',
  position: 'relative',
  display: 'block',

  '> div': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1440px',
    margin: 'auto',

    '@media(max-width: 800px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },

    '@media(max-width: 400px)': {
      padding: '0',
    },
  },

  '.banner': {
    objectFit: 'cover',
  },
})

export const PinsContainer = styled('div', {
  width: '100%',
  marginTop: '5rem',

  div: {
    maxWidth: '1440px',
    margin: '0 auto',

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
      gap: '1rem',
      marginTop: '3rem',
      '@media(max-width: 1000px)': {
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const CardsContainer = styled('div', {
  marginTop: '8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',

  '@media(max-width: 1000px)': {
    flexDirection: 'column',
  },
})
