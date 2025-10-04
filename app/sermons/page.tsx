import { Navigation } from "@/components/navigation"
import { SermonsList } from "@/components/sermons-list"
import { Footer } from "@/components/footer"
import { getAllSermons } from "@/lib/sermons"

export const metadata = {
  title: "Sermons - Courtyard of Truth",
  description:
    "Listen to inspiring sermons and biblical teachings from Courtyard of Truth. Grow in your faith through God's Word.",
}

export default function SermonsPage() {
  const sermons = getAllSermons()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-church-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Discover God's truth through biblical teaching that transforms hearts and minds.
          </p>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SermonsList sermons={sermons} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
