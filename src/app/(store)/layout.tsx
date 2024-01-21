import { Header } from '@/components/Header'
import { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function LayoutStore({ children }: StoreLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
      <Header />
      {children}
    </div>
  )
}
