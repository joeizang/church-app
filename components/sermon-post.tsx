import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Play, Download, Share2 } from "lucide-react"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import type { Sermon } from "@/lib/sermons"

interface SermonPostProps {
  sermon: Sermon
}

export function SermonPost({ sermon }: SermonPostProps) {
  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/sermons"
          className="inline-flex items-center text-church-purple hover:text-church-red transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Sermons
        </Link>

        {/* Sermon Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-church-red/10 text-church-red border-church-red/20">
              {sermon.series}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {sermon.date}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {sermon.speaker}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {sermon.duration}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-church-purple mb-4 text-balance">{sermon.title}</h1>

          {sermon.scripture && <p className="text-xl text-church-gold font-medium italic mb-6">{sermon.scripture}</p>}

          {sermon.excerpt && <p className="text-xl text-gray-600 leading-relaxed text-pretty mb-8">{sermon.excerpt}</p>}

          {/* Audio Player & Actions */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h3 className="font-semibold text-church-purple mb-2">Listen to this sermon</h3>
                <p className="text-sm text-gray-600">Duration: {sermon.duration}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {sermon.audioUrl ? (
                  <>
                    <Button className="bg-church-red hover:bg-church-red/90 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Play Audio
                    </Button>
                    <Button
                      variant="outline"
                      className="border-church-purple text-church-purple hover:bg-church-purple/10 bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </>
                ) : (
                  <p className="text-sm text-gray-500 italic">Audio coming soon</p>
                )}

                <Button variant="ghost" className="text-church-purple hover:text-church-red hover:bg-church-purple/5">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Sermon Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={sermon.content} />
        </div>

        {/* Sermon Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Preached by</p>
              <p className="font-semibold text-church-purple">{sermon.speaker}</p>
              {sermon.series && <p className="text-sm text-church-gold">Part of the "{sermon.series}" series</p>}
            </div>
            <Link href="/sermons">
              <Button
                variant="outline"
                className="border-church-purple text-church-purple hover:bg-church-purple/10 bg-transparent"
              >
                View All Sermons
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
