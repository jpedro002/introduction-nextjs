import { Skeleton } from '@/components/Skeleton'

export default function homeLoading() {
  return (
    <div className=" grid  grid-cols-9 grid-rows-6 gap-4 w-full ">
      <Skeleton className="col-span-6 row-span-6  " />
      <Skeleton className="col-span-3 row-span-3  " />
      <Skeleton className="col-span-3 row-span-3  " />
    </div>
  )
}
