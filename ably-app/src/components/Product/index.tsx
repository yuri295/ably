import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Text } from '@/components/Text';
import { ProductInfo } from '@/components/Product/ProductInfo';
import { Image } from '@/components/Image';

interface Prop {
  id: number;
  src?: string;
  sale?: number;
  price: number;
  store: string;
  title: string;
  bought?: number;
  big?: boolean;
}

const style = {
  container: {
    height: 'auto',
  },
};

export const Product: FC<Prop> = ({ src, sale, price, store, title, bought, big }) => {
  return (
    <Box sx={style.container}>
      <Stack>
        <Image alt='상품 이미지 준비중' src={src} />
        <Stack spacing={6}>
          <ProductInfo sale={sale} price={price} store={store} title={title} bought={bought} />
          {big && <Text type='small'>{bought}개 구매중</Text>}
        </Stack>
      </Stack>
    </Box>
  );
};
