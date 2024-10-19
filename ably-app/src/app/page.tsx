import type { FC } from 'react';
import { ProductList } from '@/components/ProductList';

interface Post {
  id: number;
  src?: string;
  sale?: number;
  price: number;
  store: string;
  title: string;
  bought?: number;
}

const posts: Post[] = [
  {
    id: 1,
    src: 'images/product1.webp',
    sale: 41,
    price: 100,
    store: '모리무드',
    title: 'Product1Product1Product1Product1Product1',
    bought: 20,
  },
  { id: 1, src: 'images/product2.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 2, src: 'images/product3.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product4.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product5.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product6.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product7.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product8.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product9.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product10.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product11.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product12.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product13.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product14.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product15.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product2.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 2, src: 'images/product3.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product4.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product5.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product6.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product7.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product8.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product9.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product10.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product11.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product12.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product13.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product14.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product15.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product2.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 2, src: 'images/product3.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product4.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product5.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product6.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product7.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product8.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product9.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product10.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product11.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product12.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product13.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product14.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product15.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product9.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product10.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product11.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product12.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product13.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product14.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product15.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product2.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 2, src: 'images/product3.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product4.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product5.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product6.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product7.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product8.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product9.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product10.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product11.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product12.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product13.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product14.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
  { id: 1, src: 'images/product15.webp', sale: 41, price: 100, store: '모리무드', title: 'Product1', bought: 20 },
];

export default function Home() {
  return <ProductList posts={posts} />;
}
