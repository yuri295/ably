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
];

export default function Home() {
  return <ProductList posts={posts} />;
}
