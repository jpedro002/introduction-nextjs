import Image from 'next/image'
import Link from 'next/link'
import { CartAreaInHeader } from './CartAreaInHeader'
import { SearchForm } from './SearchForm'

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5 ">
        <Link href="/">DevStore</Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4  ">
        <CartAreaInHeader />

        <div className="h-4 w-px bg-zinc-700 " />
        <Link href="/" className="flex items-center gap-2 hover:underline  ">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/jpedro002.png"
            alt=""
            className="w-6 h-6 rounded-full  "
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
