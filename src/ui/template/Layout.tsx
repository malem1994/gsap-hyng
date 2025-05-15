import { useEffect } from 'react';
import { Header } from '../organisms/Header'
import { initScrollSmoother } from '@/utils/scroll';
import { Footer } from '../organisms/Footer';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    initScrollSmoother();
  }, []);


  return (
    <div id="smooth-wrapper" className='flex flex-col items-center min-h-screen'>
      <Header />
      <div id="smooth-content">
        <main className='flex-auto self-stretch flex flex-col gap-0'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
