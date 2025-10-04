import { Navigation } from "@/components/navigation"
import { PhotoGallery } from "@/components/photo-gallery"

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-church-gold mb-4">Courtyard of Truth</h3>
              <p className="text-gray-300 mb-4">
                A place where faith meets community, and truth illuminates our path forward together.
              </p>
              <p className="text-gray-400 text-sm">© 2024 Courtyard of Truth. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold text-church-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/blog" className="hover:text-church-gold transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/sermons" className="hover:text-church-gold transition-colors">
                    Sermons
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-church-gold transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-church-gold transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-church-gold mb-4">Service Times</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sunday Service: 10:00 AM</li>
                <li>Bible Study: Wed 7:00 PM</li>
                <li>Youth Group: Fri 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
