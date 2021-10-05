import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  light: {
    text: '#000000',
  },
  background: {
    white: '#F2EFC4',
    green: '#188C4F',
    lightGreen: '#B2F2D0',
  },
  text: {
    primary: '#188C4F',
    secondary: '#B8B8B8',
  },
  fontSize: {
    bannerTitle: '50px',
    h1: '24px',
    h2: '19px',
    h3: '18px',
    h4: '17px',
    p: '16px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
})

export default theme
