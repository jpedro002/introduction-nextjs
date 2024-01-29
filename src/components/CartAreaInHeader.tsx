'use client'

import { useCartContext } from '@/contexts/cartContext'
import { ShoppingBag } from 'lucide-react'
import { useEffect } from 'react'

export const CartAreaInHeader = () => {
  const { cart } = useCartContext()

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className="flex items-center gap-2  ">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">cart {cart.length}</span>
    </div>
  )
}
