'use client';
import { useEffect, useState } from 'react';
import { axios } from '@/utils/axios';
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

interface ApiResponse {
  posts: Post[];
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchProduct = async () => {
    const { data } = await axios.get('/posts/');
    setPosts(data);
  };

  useEffect(() => {
    fetchProduct();
    console.log(posts);
  });

  return <ProductList posts={posts} />;
};

export default Home;
