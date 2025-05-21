import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col justify-between font-sans'>
      <Header />
      <section className='mb-auto mt-20'>{children}</section>
      <Footer />
    </div>
  );
}
