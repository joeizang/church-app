import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Courtyard of Truth",
  description: "Read our latest blog posts about faith, community, and spiritual growth at Courtyard of Truth.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative py-20 overflow-hidden section-purple bg-sacred-grid">
        <div className="absolute inset-0 pointer-events-none section-vignette" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">Reflections &amp; Insights</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6">Church Blog</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <p className="text-foreground/85 text-lg max-w-xl mx-auto leading-relaxed">
            Insights, reflections, and updates from our church community as we grow together in faith.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
      <Footer />
    </div>
  )
}
