import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/cartContext'
import { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function LayoutStore({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[4.5rem_1fr] gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
