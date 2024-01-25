import { data } from './data'

export const GET = () => {
  return Response.json(data.products)
}
