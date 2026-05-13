
import Hero from '@/components/Hero'
import AlphaFeed from '@/components/AlphaFeed'
import WhaleTracker from '@/components/WhaleTracker'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <Hero />
      <AlphaFeed />
      <WhaleTracker />
    </main>
  )
}
