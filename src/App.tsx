import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useThemeContext } from 'context/ThemeContext';

import ThemeSwitcher from 'components/ThemeSwitcher';
import Search from 'components/Search';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ paddingTop: '5rem' }}>
        <ThemeSwitcher />
        <Typography
          variant='h4'
          sx={{ marginBottom: '3rem', marginTop: '3rem' }}
        >
          Coin Market Cap shitcoins searcher
        </Typography>

        <Search />
      </Container>
    </ThemeProvider>
  );
}

export default App;
