"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, Play, Download } from "lucide-react"
import type { Sermon } from "@/lib/sermons"

interface SermonsListProps {
  sermons: Sermon[]
}

export function SermonsList({ sermons }: SermonsListProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-church-purple mb-4">Recent Sermons</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Listen to our latest messages and grow in your understanding of God's Word.
        </p>
      </div>

      <div className="grid gap-8">
        {sermons.map((sermon) => (
          <Card key={sermon.slug} className="hover:shadow-lg transition-shadow border-l-4 border-l-church-red">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-church-red text-white border-church-red">
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
              <Link href={`/sermons/${sermon.slug}`} className="group">
                <h3 className="text-2xl font-bold text-church-purple group-hover:text-church-red transition-colors mb-2">
                  {sermon.title}
                </h3>
              </Link>
              {sermon.scripture && <p className="text-church-purple font-medium italic">{sermon.scripture}</p>}
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">{sermon.excerpt}</p>

              <div className="flex flex-wrap gap-3">
                <Link href={`/sermons/${sermon.slug}`}>
                  <Button className="bg-church-red hover:bg-church-red/90 text-white">
                    <Play className="h-4 w-4 mr-2" />
                    Listen Now
                  </Button>
                </Link>

                {sermon.audioUrl && (
                  <Button
                    variant="outline"
                    className="border-church-purple text-church-purple hover:bg-church-purple/10 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Audio
                  </Button>
                )}

                <Link href={`/sermons/${sermon.slug}`}>
                  <Button variant="ghost" className="text-church-purple hover:text-church-red hover:bg-church-purple/5">
                    Read Notes →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sermons.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No sermons available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
