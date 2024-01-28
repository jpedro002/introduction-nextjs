'use client'

import { Product } from '@/app/(store)/(home)/page'
import { useCartContext } from '@/contexts/cartContext'

interface ButtonAddToCartProps {
  product: Product
}

export const ButtonAddToCart = (product: ButtonAddToCartProps) => {
  const { cart } = useCartContext()

  const handleAddToCart = (productToAdd: Product) => {
    const productExistsInCart = cart.find(
      (product) => product.id === productToAdd.id,
    )
    console.log(productToAdd)

    console.log(productExistsInCart)
  }

  return (
    <button
      onClick={() => handleAddToCart(product)}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
