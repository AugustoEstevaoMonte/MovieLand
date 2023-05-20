import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';

// Isso aqui é igual a const API_URL = ''
function _0x47a0(_0x4bd639,_0x4546c4){const _0x598408=_0x19b9();return _0x47a0=function(_0x4652c9,_0x342e15){_0x4652c9=_0x4652c9-(-0x8e+-0x13d*0x4+0x616);let _0x198297=_0x598408[_0x4652c9];return _0x198297;},_0x47a0(_0x4bd639,_0x4546c4);}const _0x5d5d51=_0x47a0;(function(_0x399896,_0x5ed626){const _0xe7ac32=_0x47a0,_0xa0fc2d=_0x399896();while(!![]){try{const _0x1d9d24=-parseInt(_0xe7ac32(0x97))/(-0x5f*-0x1+0x1*0xf13+-0xf71)*(parseInt(_0xe7ac32(0x9e))/(0x139d*0x1+-0x9eb*0x3+0x3*0x362))+parseInt(_0xe7ac32(0xa4))/(0x2f5*0x1+-0x6d*-0x13+-0xb09)*(parseInt(_0xe7ac32(0x9c))/(0x1bcf+0x1*0x1215+-0x2de0))+parseInt(_0xe7ac32(0x9a))/(-0x1*0x1432+0x1952+-0x51b)+parseInt(_0xe7ac32(0xa0))/(-0x125*0x8+-0x138c*-0x1+-0xa5e)*(parseInt(_0xe7ac32(0xa3))/(0x1a17+-0x569*0x3+-0x9d5*0x1))+parseInt(_0xe7ac32(0xa2))/(-0x123*0x11+-0x1229*-0x1+0x132)*(-parseInt(_0xe7ac32(0x95))/(-0xb33*-0x3+0x1*-0x86f+-0x1921))+parseInt(_0xe7ac32(0x94))/(-0x4cd*0x1+-0x2*-0x3d7+-0x2d7*0x1)*(parseInt(_0xe7ac32(0x96))/(-0x1fb9+-0x2*-0x494+0xb4e*0x2))+-parseInt(_0xe7ac32(0x9d))/(-0x1aa7+-0x6b*-0x1+0x1a48)*(parseInt(_0xe7ac32(0x99))/(0x43*0x51+-0x2*0x3a+-0x14b2));if(_0x1d9d24===_0x5ed626)break;else _0xa0fc2d['push'](_0xa0fc2d['shift']());}catch(_0x55d761){_0xa0fc2d['push'](_0xa0fc2d['shift']());}}}(_0x19b9,0x2bb85+0x19449*0x6+-0x32b33));function _0x19b9(){const _0x254f58=['4810855hmRLWL','com/?apike','4NWnGsY','9698532wCzjeX','73482zkrxzU','https://ww','6846FRFdHo','w.omdbapi.','61736qTSMCO','931ZKmzPa','1814217xQGAis','239930FsRlub','36GtytmU','121ihxqCN','15ahZdgh','y=d802d2b6','13wzwXpX'];_0x19b9=function(){return _0x254f58;};return _0x19b9();}const API_URL=_0x5d5d51(0x9f)+_0x5d5d51(0xa1)+_0x5d5d51(0x9b)+_0x5d5d51(0x98);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('Superman');
  const [movies, setMovies] = useState([]);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Superman')
  }, [])

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Header handleDarkMode={handleDarkMode} dark={darkMode}/>
      <Hero dark={darkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies}/>
      {movies?.length > 0 ? (
        <>
        <Cards dark={darkMode} movies={movies}/>
        </>
      ) 
      : (
        <>
          <h2>Movie not found!</h2>
        </>
      )}
    </ThemeProvider>
  )
}

export default App
