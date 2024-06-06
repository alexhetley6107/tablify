import React, { FC, PropsWithChildren } from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            dark: '#4690E2',
            main: '#F1F5F8',
            light: '#FEFEFE',
          },
          secondary: {
            dark: '#343434',
            main: '#7F858D',
            light: '#FEFEFE',
          },
          error: {
            main: '#EE3F3E',
          },
        },
        typography: {
          fontFamily: 'Montserrat, sans-serif',
        },
      }),
    []
  );

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
