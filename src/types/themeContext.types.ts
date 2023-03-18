import { PaletteMode, Theme } from '@mui/material';

export interface ThemeContextProps {
  mode: PaletteMode;
  theme: Theme;
  toggleColorMode: () => void;
}
