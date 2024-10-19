import type { FC } from 'react';
import { Stack } from '@mui/material';
import { SmallProductList } from '@/components/ProductList/SmallProductList';
import { BigProductList } from '@/components/ProductList/BigProductList';

interface Post {
  id: number;
  src?: string;
  sale?: number;
  price: number;
  store: string;
  title: string;
  bought?: number;
}

interface Prop {
  posts: Post[];
}

export const ProductList: FC<Prop> = ({ posts }) => {
  return (
    <Stack spacing={5}>
      <SmallProductList posts={posts} />
      <BigProductList posts={posts} />
    </Stack>
  );
};
