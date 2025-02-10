import { SIDENAV_MENU } from '@/constants'
import theme from '@/src/app/theme'
import {
  Avatar,
  Box,
  Grid2,
  ListItem,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { blueGrey } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material/styles'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
          }}
        >
          <Grid2 container spacing={0} sx={{ flexGrow: 1, height: '100%' }}>
            <Grid2 sx={{ background: '#1C2434', height: '100%' }} size={2}>
              <MenuList>
                {SIDENAV_MENU.map((list) => (
                  <Link key={list.url} href={list.url} passHref legacyBehavior>
                    <MenuItem
                      component="a"
                      sx={{ color: 'white', fontSize: 'small', px: 6 }}
                    >
                      <ListItemIcon>
                        {<list.icon sx={{ color: 'white' }} />}
                      </ListItemIcon>
                      <ListItem>{list.label}</ListItem>
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Grid2>
            <Grid2 sx={{ height: '100%', background: blueGrey[50] }} size={10}>
              <Grid2
                size={12}
                sx={{ height: '80px', backgroundColor: 'white' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flex: {
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    },
                    backgroundColor: 'white',
                    height: '100%',
                    px: 3,
                  }}
                >
                  <Avatar>H</Avatar>
                </Box>
              </Grid2>
              <Grid2 size={12} sx={{ height: 'auto' }}>
                {children}
              </Grid2>
            </Grid2>
          </Grid2>
        </Paper>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
