import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      fblue: '#0866FF',
      blue: {
        40: '#3e86fa',
        50: '#0866FF',
      },
      green: {
        50: '#36A420',
        60: '#0a941d',
      },
    },
    fontSizes: {
      lg: '48px',
    },
    textStyles: {
      logo: {
        fontSize: '48px',
        color: '#0866FF',
        fontWeight: '1000',
      },
      h07: {
        fontSize: '24px',
        color: '#1c1e21',
        fontWeight: '400',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);

export default theme;
