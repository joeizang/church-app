import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Courtyard of Truth",
    }
  }

  return {
    title: `${post.title} - Courtyard of Truth Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BlogPost post={post} />

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
