import { PaletteMode } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

import { THEME } from 'types';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === THEME.LIGHT
      ? {
          primary: purple,
          divider: purple[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: purple,
          divider: purple[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
