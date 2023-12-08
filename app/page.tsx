import {Hero,Explore, Trending, Fresh_collections, Footer} from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <Explore />
      <Trending />
      <Fresh_collections />
      <Footer />
    </main>
  )
}
