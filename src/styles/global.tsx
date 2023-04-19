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
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: '$gray900',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$red500',
      borderRadius: '2px',
    },
  },
})
