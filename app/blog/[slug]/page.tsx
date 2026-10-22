import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BlogPost post={post} />

      <Footer />
    </div>
  )
}
