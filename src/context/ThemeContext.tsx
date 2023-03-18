import {
  createContext,
  useState,
  useMemo,
  FC,
  useContext,
  useEffect,
} from 'react';
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { THEME, ThemeContextProps } from 'types';
import { getFromStorage, saveToStorage } from 'utils';
import { getDesignTokens } from 'styles';

const LOCAL_STORAGE_THEME_KEY = 'theme';

const ThemeContext = createContext({});

const ThemeContextDataLayer: FC<any> = ({ children }): JSX.Element => {
  // by default light
  const [mode, setMode] = useState<PaletteMode>(THEME.LIGHT);

  useEffect(() => {
    const themeKey = getFromStorage<PaletteMode>(LOCAL_STORAGE_THEME_KEY);

    if (!themeKey) {
      saveToStorage(LOCAL_STORAGE_THEME_KEY, THEME.LIGHT);
    }

    setMode(themeKey);
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) => {
      const value = prevMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

      saveToStorage(LOCAL_STORAGE_THEME_KEY, value);

      return value;
    });
  };

  const data = useMemo(
    () => ({
      toggleColorMode,
      theme,
      mode,
    }),
    [theme, mode],
  );

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): ThemeContextProps =>
  // @ts-expect-error
  useContext(ThemeContext);

export default ThemeContextDataLayer;
