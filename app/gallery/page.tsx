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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-church-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Capturing the beautiful moments of our church community and the joy we share together in faith.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

      <Footer />
    </div>
  )
}
