import { Navigation } from "@/components/navigation"
import { SermonPost } from "@/components/sermon-post"
import { getSermon, getAllSermonSlugs } from "@/lib/sermons"
import { notFound } from "next/navigation"

interface SermonPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSermonSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: SermonPageProps) {
  const sermon = getSermon(params.slug)

  if (!sermon) {
    return {
      title: "Sermon Not Found - Courtyard of Truth",
    }
  }

  return {
    title: `${sermon.title} - Courtyard of Truth Sermons`,
    description: sermon.excerpt,
  }
}

export default function SermonPage({ params }: SermonPageProps) {
  const sermon = getSermon(params.slug)

  if (!sermon) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <SermonPost sermon={sermon} />

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
                  <a href="/gallery" className="hover:text-church-gold transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-church-gold transition-colors">
                    Blog
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
