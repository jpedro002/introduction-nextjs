'use client'

import { Product } from '@/app/(store)/(home)/page'
import React, { ReactNode, createContext, useContext, useState } from 'react'

const CartContext = createContext(
  {} as {
    cart: Product[]
    setCart: React.Dispatch<React.SetStateAction<Product[]>>
  },
)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)

  return context
}

export { CartContext, CartProvider, useCartContext }
