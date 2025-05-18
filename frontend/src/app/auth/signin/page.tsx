'use client';

import { useRouter } from 'next/navigation';
import { LoginDialog } from '@/components/login-dialog';

export default function SignIn() {
  const router = useRouter();

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h1>
          <p className='mt-2 text-sm text-gray-600'>
            Or{' '}
            <a href='/register' className='font-medium text-blue-600 hover:text-blue-500'>
              create a new account
            </a>
          </p>
        </div>
        <LoginDialog showButton={false} />
      </div>
    </div>
  );
}
