'use client'

import { useCartContext } from '@/contexts/cartContext'

export interface AddToCartButtonProps {
  productId: number
}

export function ButtonAddToCart({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCartContext()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
