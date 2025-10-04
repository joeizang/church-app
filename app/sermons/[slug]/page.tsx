import { Navigation } from "@/components/navigation"
import { SermonPost } from "@/components/sermon-post"
import { Footer } from "@/components/footer"
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

      <Footer />
    </div>
  )
}
