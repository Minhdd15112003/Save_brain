'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function AuthCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return <LoadingSpinner />;
}
