import '@/app/globals.css'
import { Avatar, Box, ListItem, MenuItem, MenuList } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { blueGrey } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import theme from './theme'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const navbarWidth = 240

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
              <Box
                component="nav"
                sx={{
                  width: { sm: navbarWidth },
                  height: '100vh',
                  flexShrink: { sm: 0 },
                  background: '#1C2434',
                }}
              >
                <MenuList sx={{ color: 'white' }}>
                  <Link href="/add" passHref legacyBehavior>
                    <MenuItem component="a">
                      <ListItem>Add Invoice</ListItem>
                    </MenuItem>
                  </Link>
                  <Link href="/list" passHref legacyBehavior>
                    <MenuItem component="a">
                      <ListItem>My Invoices</ListItem>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Box>

              <Box
                component="main"
                sx={{
                  height: '100vh',
                  flexShrink: { sm: 0 },
                  width: `calc(100% - ${navbarWidth}px)`,
                  background: blueGrey[50],
                }}
              >
                <Box
                  component="nav"
                  sx={{
                    display: 'flex',
                    flex: {
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    },
                    backgroundColor: 'white',
                    padding: 3,
                  }}
                >
                  <Avatar>H</Avatar>
                </Box>
                <Box component="div" sx={{ padding: 10 }}>
                  {children}
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
