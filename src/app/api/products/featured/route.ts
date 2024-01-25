import { data } from '../data'

export const GET = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  const featuredProducts = data.products.filter(
    (product) => product.featured === true,
  )

  return Response.json(featuredProducts)
}
