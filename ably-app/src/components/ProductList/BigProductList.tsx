import type { FC } from 'react';
import { Grid2, Stack } from '@mui/material';
import { Product } from '@/components/Product';

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

export const BigProductList: FC<Prop> = ({ posts }) => {
  return (
    <Grid2 container spacing={2}>
      {posts.slice(3).map(({ id, src, sale, price, store, title, bought }) => (
        <Grid2 key={id} size={{ xs: 6 }}>
          <Product id={id} src={src} sale={sale} price={price} store={store} title={title} bought={bought} big />
        </Grid2>
      ))}
    </Grid2>
  );
};
