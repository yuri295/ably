import { Stack } from '@mui/material';
import { ProductInfo } from '@/components/Product/ProductInfo';
import { Image } from '@/components/Image';

export const Product = () => {
  return (
    <Stack>
      <Image alt='상품 이미지 준비중' src='images/product1.webp' />
      <ProductInfo />
    </Stack>
  );
};
