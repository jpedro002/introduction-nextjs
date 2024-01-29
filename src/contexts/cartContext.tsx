'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

const CartContext = createContext(
  {} as {
    cart: CartItem[]
    addToCart: (productId: number) => void
  },
)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCart((prev) => {
      const productInCart = prev.some((item) => item.productId === productId)

      if (productInCart) {
        return prev.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...prev, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)

  return context
}

export { CartContext, CartProvider, useCartContext }
