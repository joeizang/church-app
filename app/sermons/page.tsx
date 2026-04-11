import { Navigation } from "@/components/navigation"
import { SermonsList } from "@/components/sermons-list"
import { Footer } from "@/components/footer"
import { getAllSermons } from "@/lib/sermons"

export const metadata = {
  title: "Sermons - Courtyard of Truth",
  description: "Listen to inspiring sermons and biblical teachings from Courtyard of Truth. Grow in your faith through God's Word.",
}

export default function SermonsPage() {
  const sermons = getAllSermons()
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative py-20 overflow-hidden section-crimson bg-sacred-grid">
        <div className="absolute inset-0 pointer-events-none section-vignette" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">The Living Word</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6">Sermons</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <p className="text-foreground/85 text-lg max-w-xl mx-auto leading-relaxed">
            Discover God&rsquo;s truth through biblical teaching that transforms hearts and minds.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SermonsList sermons={sermons} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
