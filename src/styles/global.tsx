import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: 'Inter',
    'webkit-font-smoothing': 'antialiased',
    color: '$gray100',
    backgroundColor: '$gray900',
  },
})
