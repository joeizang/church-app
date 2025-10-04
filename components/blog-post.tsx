import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import type { BlogPost as BlogPostType } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-church-purple hover:text-church-red transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
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

          <h1 className="text-4xl md:text-5xl font-bold text-church-purple mb-4 text-balance">{post.title}</h1>

          {post.excerpt && <p className="text-xl text-gray-600 leading-relaxed text-pretty">{post.excerpt}</p>}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Written by</p>
              <p className="font-semibold text-church-purple">{post.author}</p>
            </div>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-church-purple text-church-purple hover:bg-church-purple/10 bg-transparent"
              >
                View All Posts
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
