import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MovieIcon from '@mui/icons-material/Movie';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import { Button } from '@mui/material';


const Header = ({ handleDarkMode, dark }) => {

  return (
    <>
      <AppBar position="fixed" sx={{
        backgroundColor: dark ? '' : '#fff'
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MovieIcon sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: dark ? '' : 'black'
            }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Inter',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: dark ? 'white' : 'black',
                textDecoration: 'none',
              }}
            >
              MovieLand
            </Typography>


            <MovieIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: dark ? '' : 'black' }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: '.3rem',
                color: dark ? '#fff' : 'black',
                textDecoration: 'none',
              }}
            >
              MovieLand
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            </Box>

            <Box sx={{ flexGrow: 0 }}>

              <Button 
                onClick={handleDarkMode} 
                title={dark ? 'Turn on light mode' : 'Turn on dark mode'}
                size='small'
                sx={{
                  border: 'red'
                }}
              >
                {dark ? (
                  <DarkModeIcon
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: "pointer",
                      color: '#fff'
                    }}
                  />
                ) : (


                  <WbSunnyIcon
                    title="Turn on"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: "pointer",
                      color: 'black'
                    }}
                  />
                )}
              </Button>


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header;