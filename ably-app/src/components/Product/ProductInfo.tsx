import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Text } from '@/components/Text';

interface Prop {
  big?: boolean;
  sale?: number;
  price: number;
  store: string;
  title: string;
  bought?: number;
}

const style = {
  container: {
    height: '30px',
  },
};

export const ProductInfo: FC<Prop> = ({ big, sale, price, store, title, bought }) => {
  return (
    <Box sx={style.container}>
      <Stack direction='row' spacing={0.5}>
        <Text type='largeRed'>{sale}%</Text>
        <Text type='large'>{price}</Text>
      </Stack>
      <Text type='small'>{store}</Text>
      <Text type='small'>{title}</Text>
    </Box>
  );
};
