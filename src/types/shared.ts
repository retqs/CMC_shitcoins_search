import { ChangeEvent } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ReactFormProps = ChangeEvent<HTMLFormElement>;
