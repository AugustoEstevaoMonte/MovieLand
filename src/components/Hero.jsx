import React from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Hero = ({ dark, searchTerm, setSearchTerm, searchMovies }) => {

  const handleSetSearchName = (e) => {
    const search = e.target.value
    setSearchTerm(search)
  }

  const handleKeyPressed = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "8rem"
        }}
      >
          <Typography variant="h1" component="h1" sx={{ 
            fontSize: { xs: "2rem", md: "3rem" }, 
            letterSpacing: "0.9px", 
            width: "fit-content", 
            background: dark? 'linear-gradient(90deg, rgba(2,212,36,1) 0%, rgba(9,212,121,0.99) 35%, rgba(0,212,255,1) 100%)' : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', 
            WebkitTextFillColor: "transparent", 
            WebkitBackgroundClip: "text", 
            fontFamily: 'Inter', 
            marginBottom: "1.5rem" }}>
            MovieLand
          </Typography>
      </Box>

      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          fontFamily: 'Inter',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: dark ? '' : 'rgba(0, 0, 0, 0.04)',
          "&:hover": dark ? {'backgroundColor': 'rgba(0, 0, 0, 0.08)'} : {'backgroundColor': 'rgba(0, 0, 0, 0.08)'},
          width: { xs: '90vw', md: '50vw' },
          margin: '1rem auto', 
        }}
      >
        <InputBase sx={{ ml: 3, flex: 1, fontFamily: 'Inter' }} 
          placeholder={searchTerm}
          onChange={handleSetSearchName}
          value={searchTerm}
          onKeyPress={handleKeyPressed}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => searchMovies(searchTerm)}>
          <SearchIcon  />
        </IconButton>
      </Paper>  
    </>
  )
}

export default Hero;