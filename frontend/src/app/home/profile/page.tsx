'use client';

import { getAuthToken } from '@/app/api/ApiService';
import { LoginDialog } from '@/components/login-dialog';
import { useEffect, useState } from 'react';

// import { genPageMetadata } from 'app/seo'
// export const metadata = genPageMetadata({ title: 'Profile' })

export default function Page() {
  const token = getAuthToken();
  const [user, setUser] = useState<any>(null);
  const [openLogin, setOpenLogin] = useState(false);
  useEffect(() => {
    if (!token) {
      setOpenLogin(true);
    } else {
      console.log('Token:', token);
      // Fetch user data using the token
    }
  }, [token]);

  return (
    <>
      {openLogin && <LoginDialog stateDialog={openLogin} showButton={false} />}
      <h1 className='text-3xl font-bold'>Profile</h1>
    </>
  );
}
