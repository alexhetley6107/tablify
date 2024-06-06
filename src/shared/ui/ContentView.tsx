import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  title: string;
}

export const ContentView: FC<Props> = ({ title }) => {
  return (
    <Stack width="100%" height="100%" sx={{ bgcolor: 'primary.main', p: '50px' }}>
      <Stack height="100%" sx={{ borderRadius: '6px', bgcolor: 'primary.light', p: 2 }}>
        <Typography variant="h2">{title}</Typography>

        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum perferendis fugit, libero impedit aliquid
          repellendus sequi et quo, numquam tempore consequatur delectus quam neque minus nam repudiandae atque at!
        </Typography>
      </Stack>
    </Stack>
  );
};
