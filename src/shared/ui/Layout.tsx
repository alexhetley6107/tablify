import { FC, PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      sx={{
        pt: '69px',
        height: '100svh',
        bgcolor: 'primary.light',
      }}
    >
      {children}
    </Stack>
  );
};
