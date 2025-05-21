'use client';

import { SWRConfig } from 'swr';
import apiService from '@/app/api/ApiService';
import toast, { Toaster } from 'react-hot-toast';

export default function SWRProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => apiService.get(resource, init).then((res) => res.data),
        revalidateOnFocus: true, // nếu không có thì sẽ không tự động revalidate khi focus lại tab
        revalidateOnReconnect: true, // nếu không có thì sẽ không tự động revalidate khi reconnect lại mạng
        onError: (error, key) => {
          // handel global err
          console.log('global error fetcher', error);
          toast.error(error.response?.data?.message || error.message || 'Something went wrong', {
            duration: 3000,
            position: 'top-right',
          });
        },
      }}
    >
      {children}
      <Toaster />
    </SWRConfig>
  );
}
