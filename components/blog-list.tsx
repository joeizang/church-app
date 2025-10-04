import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"

export function BlogList() {
  const posts = getAllBlogPosts()

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-church-purple mb-4">Latest Posts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay connected with our church community through thoughtful reflections, updates, and spiritual insights.
        </p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-shadow border-l-4 border-l-church-purple">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-church-gold/10 text-church-gold border-church-gold/20">
                  {post.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="text-2xl font-bold text-church-purple group-hover:text-church-red transition-colors mb-2">
                  {post.title}
                </h3>
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-church-purple hover:text-church-red transition-colors font-medium"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
