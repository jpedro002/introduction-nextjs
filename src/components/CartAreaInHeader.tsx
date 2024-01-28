'use client'

import { useCartContext } from '@/contexts/cartContext'
import { ShoppingBag } from 'lucide-react'

export const CartAreaInHeader = () => {
  const { cart } = useCartContext()

  return (
    <div className="flex items-center gap-2  ">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">cart {}</span>
    </div>
  )
}
