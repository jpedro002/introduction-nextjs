import { data } from '../data'

export const GET = async () => {
  const featuredProducts = data.products.filter(
    (product) => product.featured === true,
  )

  return Response.json(featuredProducts)
}
