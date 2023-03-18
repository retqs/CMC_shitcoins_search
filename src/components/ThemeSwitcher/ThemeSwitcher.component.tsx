import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { THEME } from 'types';
import { useThemeContext } from 'context/ThemeContext';

const ThemeSwitcher = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton onClick={toggleColorMode} color='inherit'>
      {mode === THEME.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
