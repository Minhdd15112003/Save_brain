'use client';

import { useEffect, useState } from 'react';
import Main from '../../layouts/Main';
import LoadingSpinner from '@/components/LoadingSpinner';
import apiService from '@/app/api/ApiService';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await apiService.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Main posts={posts} />
    </>
  );
}
