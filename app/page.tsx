import {Hero,Explore, Trending, Fresh_collections, Footer, CategoryComponent} from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <Explore />
      <Trending />
      <Fresh_collections />
      <CategoryComponent />
      <Footer />
    </main>
  )
}
