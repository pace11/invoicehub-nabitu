'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: 20,
        },
        standardSuccess: {
          borderLeftWidth: 6,
          borderLeftStyle: 'solid',
          borderLeftColor: '#34D399',
          color: '#637381',
          fontWeight: 'normal',
        },
      },
    },
    MuiAlertTitle: {
      defaultProps: {
        color: '#004434',
        fontSize: '16pt',
      },
    },
  },
})

export default theme
