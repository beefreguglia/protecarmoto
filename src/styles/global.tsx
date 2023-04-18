import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: 'Poppins, sans-serif',
    'webkit-font-smoothing': 'antialiased',
    color: '$gray100',
    backgroundColor: '$gray900',
  },
})
