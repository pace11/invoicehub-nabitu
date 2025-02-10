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
    MuiChip: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
        colorSuccess: {
          backgroundColor: '#eef6f2',
          color: '#4a945a',
        },
        colorError: {
          backgroundColor: '#fbf1f1',
          color: '#c24c56',
        },
        colorWarning: {
          backgroundColor: '#fff8ec',
          color: '#f3ab3e',
        },
      },
    },
  },
})

export default theme
