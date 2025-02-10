import { SIDENAV_MENU } from '@/constants'
import theme from '@/src/app/theme'
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  MenuItem,
  MenuList,
} from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { blueGrey } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material/styles'
import Link from 'next/link'

const navbarWidth = 240

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
            <MenuList>
              {SIDENAV_MENU.map((list) => (
                <Link key={list.url} href={list.url} passHref legacyBehavior>
                  <MenuItem
                    component="a"
                    sx={{ color: 'white', fontSize: 'small' }}
                  >
                    <ListItemIcon>
                      {<list.icon sx={{ color: 'white' }} />}
                    </ListItemIcon>
                    <ListItem>{list.label}</ListItem>
                  </MenuItem>
                </Link>
              ))}
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
            <Box sx={{ padding: 3 }}>{children}</Box>
          </Box>
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
