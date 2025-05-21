'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import useAuth from '@/hook/useAuth';

interface dialogProps {
  stateDialog?: boolean;
  showButton?: boolean;
}

export function LoginDialog({ stateDialog = false, showButton = false }: dialogProps) {
  const [open, setOpen] = useState(stateDialog);

  const { handleGoogleLogin } = useAuth();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {showButton == true ? (
        <DialogTrigger asChild>
          <Button variant='outline'>Đăng nhập</Button>
        </DialogTrigger>
      ) : null}

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-center text-xl font-semibold'>Đăng nhập</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center space-y-4 py-4'>
          <Button
            onClick={handleGoogleLogin}
            className='flex w-full items-center justify-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M8 12h8' />
              <path d='M12 8v8' />
            </svg>
            Đăng nhập với Google
          </Button>
          <div className='mt-6 text-center text-sm text-muted-foreground'>
            Bằng cách đăng nhập, bạn đồng ý với{' '}
            <Link
              href='/privacy-policy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Chính sách bảo mật
            </Link>{' '}
            của chúng tôi.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
