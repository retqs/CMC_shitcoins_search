import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useThemeContext } from 'context/ThemeContext';

function App() {
  const { theme, mode, toggleColorMode } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingTop: '5rem' }}>
        <Button onClick={toggleColorMode}>{mode}</Button>
        <CssBaseline />
        <h2>CMC platform for searching shitcoins </h2>
        <Button variant='contained'>Search</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
