import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';

// Isso aqui é igual a const API_URL = ''
const _0x2f4372=_0x3594;function _0x1eb3(){const _0x23ef59=['12CWZQLz','7798iKvaeJ','3374356tYdasc','20221788uHuLgj','7710420buEgNo','358208PbWzwy','3mUtEHV','3318CbOVhv','http://www.omdbapi.com?apikey=d802d2b6','11ONQtyj','36rRDYOF','74127Ursllo','4532585OymDnJ'];_0x1eb3=function(){return _0x23ef59;};return _0x1eb3();}(function(_0x18b91a,_0x52aa28){const _0x5128e6=_0x3594,_0x1aa371=_0x18b91a();while(!![]){try{const _0x4015bb=-parseInt(_0x5128e6(0x1b7))/0x1*(-parseInt(_0x5128e6(0x1b9))/0x2)+-parseInt(_0x5128e6(0x1bf))/0x3*(-parseInt(_0x5128e6(0x1bb))/0x4)+-parseInt(_0x5128e6(0x1b8))/0x5+parseInt(_0x5128e6(0x1c0))/0x6*(-parseInt(_0x5128e6(0x1ba))/0x7)+-parseInt(_0x5128e6(0x1be))/0x8*(parseInt(_0x5128e6(0x1b6))/0x9)+-parseInt(_0x5128e6(0x1bd))/0xa*(parseInt(_0x5128e6(0x1b5))/0xb)+parseInt(_0x5128e6(0x1bc))/0xc;if(_0x4015bb===_0x52aa28)break;else _0x1aa371['push'](_0x1aa371['shift']());}catch(_0x24d8b2){_0x1aa371['push'](_0x1aa371['shift']());}}}(_0x1eb3,0x7a43b));function _0x3594(_0x252f04,_0x46acd1){const _0x1eb30b=_0x1eb3();return _0x3594=function(_0x3594e5,_0x55ad2b){_0x3594e5=_0x3594e5-0x1b4;let _0x116ddf=_0x1eb30b[_0x3594e5];return _0x116ddf;},_0x3594(_0x252f04,_0x46acd1);}const API_URL=_0x2f4372(0x1b4);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('Superman');
  const [movies, setMovies] = useState([]);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
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
