import { Navigation } from "@/components/navigation"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Photo Gallery - Courtyard of Truth",
  description:
    "Browse through our collection of church events, community gatherings, and special moments at Courtyard of Truth.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative py-20 overflow-hidden section-purple bg-sacred-grid">
        <div className="absolute inset-0 pointer-events-none section-vignette" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">Our Moments</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6">Photo Gallery</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <p className="text-foreground/85 text-lg max-w-xl mx-auto leading-relaxed">
            Capturing the beautiful moments of our church community and the joy we share together in faith.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

      <Footer />
    </div>
  )
}
