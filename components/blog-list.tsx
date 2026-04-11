import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"

export function BlogList() {
  const posts = getAllBlogPosts()

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="font-cinzel text-2xl text-foreground mb-3">Latest Posts</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
          Stay connected through thoughtful reflections, updates, and spiritual insights from our community.
        </p>
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16 border border-church-gold/20 rounded-lg">
          <p className="text-muted-foreground font-cinzel text-sm tracking-widest uppercase">
            No posts yet — check back soon
          </p>
        </div>
      )}

      {posts.map((post) => (
        <article
          key={post.slug}
          className="group bg-card border border-church-gold/20 hover:border-church-gold/50 rounded-lg overflow-hidden transition-all duration-300"
        >
          <div className="flex">
            <div className="w-1 shrink-0 bg-church-gold/50 group-hover:bg-church-gold transition-colors" />
            <div className="flex-1 p-6 md:p-8">

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-church-gold/15 text-church-gold border border-church-gold/35 font-cinzel text-[0.65rem] tracking-wider uppercase px-2 py-0.5 rounded">
                  {post.category}
                </Badge>
                <div className="flex flex-wrap items-center gap-4 text-foreground/85 text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`} className="block mb-3">
                <h3 className="font-cinzel text-xl md:text-2xl text-foreground group-hover:text-church-gold transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>

              <p className="text-foreground/85 text-base leading-relaxed mb-5">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-church-gold hover:text-church-gold/80 transition-colors font-cinzel text-xs tracking-[0.15em] uppercase"
              >
                Read More →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
