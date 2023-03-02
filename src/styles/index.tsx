import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      gray100: '#E1E1E6',
      gray200: '#C4C4CC',
      gray300: '#8D8D99',
      gray400: '#7C7C8A',
      gray500: '#505059',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',
      gray950: '#09090A',
      red500: '#D52423',
    },
  },
})
