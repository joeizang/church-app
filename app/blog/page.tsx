import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Courtyard of Truth",
  description: "Read our latest blog posts about faith, community, and spiritual growth at Courtyard of Truth.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-church-gold text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-church-purple">Church Blog</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Insights, reflections, and updates from our church community as we grow together in faith.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>

      <Footer />
    </div>
  )
}
