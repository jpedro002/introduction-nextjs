import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/app/services/api'

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

const getProductsFeatured = async (): Promise<Product[]> => {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = response.json()

  return products
}

export default async function page() {
  const [heroProduct, ...remainingProducts] = await getProductsFeatured()

  const priceFormatted = (product: Product) => {
    return product.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-4 ">
      <Link
        key={heroProduct.id}
        href={`/product/${heroProduct.slug}`}
        className="group col-span-6 row-span-6 bg-zinc-900 rounded-md flex
          justify-center items-end overflow-hidden relative "
      >
        <Image
          alt={heroProduct.title}
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          src={heroProduct.image}
          height={600}
          width={600}
          quality={100}
        />
        <div
          className="rounded-full border-2  h-12 absolute bottom-20 right-12
            border-zinc-500 max-w-[240px] pr-1 pl-5 py-1
        bg-black/60 flex items-center gap-2
        "
        >
          <span className="text-sm text-white truncate w-full ">
            {heroProduct.title}
          </span>
          <span
            className="text-white text-sm px-4 py-2 h-full bg-violet-500
          rounded-full flex items-center justify-center text-nowrap  "
          >
            {priceFormatted(heroProduct)}
          </span>
        </div>
      </Link>
      {remainingProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group col-span-3 row-span-3 bg-zinc-900 rounded-md flex justify-center items-end overflow-hidden relative  "
        >
          <Image
            alt={product.title}
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src={product.image}
            height={300}
            width={300}
            quality={100}
          />
          <div
            className="rounded-full border-2  h-12 absolute bottom-8 right-12
            border-zinc-500 max-w-[240px] pr-1 pl-5 py-1
        bg-black/60 flex items-center gap-2
        "
          >
            <span className="text-sm text-white truncate w-full ">
              {product.title}
            </span>
            <span
              className="text-white text-sm px-4 py-2 h-full bg-violet-500
          rounded-full flex items-center justify-center text-nowrap  "
            >
              {priceFormatted(product)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
