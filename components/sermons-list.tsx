"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, Play, Download } from "lucide-react"
import type { Sermon } from "@/lib/sermons"

interface SermonsListProps {
  sermons: Sermon[]
}

export function SermonsList({ sermons }: SermonsListProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="font-cinzel text-2xl text-foreground mb-3">Recent Sermons</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
          Listen to our latest messages and grow in your understanding of God&rsquo;s Word.
        </p>
      </div>

      {sermons.length === 0 && (
        <div className="text-center py-16 border border-church-gold/20 rounded-lg">
          <p className="text-muted-foreground font-cinzel text-sm tracking-widest uppercase">
            No sermons available yet — check back soon
          </p>
        </div>
      )}

      {sermons.map((sermon) => (
        <article
          key={sermon.slug}
          className="group bg-card border border-church-gold/20 hover:border-church-red/50 rounded-lg overflow-hidden transition-all duration-300"
        >
          <div className="flex">
            <div className="w-1 shrink-0 bg-church-red/70 group-hover:bg-church-red transition-colors" />
            <div className="flex-1 p-6 md:p-8">

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-church-red/20 text-church-red border border-church-red/40 font-cinzel text-[0.65rem] tracking-wider uppercase px-2 py-0.5 rounded">
                  {sermon.series}
                </Badge>
                <div className="flex flex-wrap items-center gap-4 text-foreground/85 text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {sermon.date}</span>
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {sermon.speaker}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {sermon.duration}</span>
                </div>
              </div>

              {/* Title */}
              <Link href={`/sermons/${sermon.slug}`} className="block mb-2">
                <h3 className="font-cinzel text-xl md:text-2xl text-foreground group-hover:text-church-gold transition-colors leading-snug">
                  {sermon.title}
                </h3>
              </Link>

              {sermon.scripture && (
                <p className="text-church-gold text-base italic mb-4">{sermon.scripture}</p>
              )}

              <p className="text-foreground/85 text-base leading-relaxed mb-6">{sermon.excerpt}</p>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-church-gold hover:bg-church-gold/90 text-background font-cinzel tracking-[0.12em] uppercase text-xs h-9 px-5">
                  <Link href={`/sermons/${sermon.slug}`}>
                    <Play className="h-3.5 w-3.5 mr-2" />
                    Listen Now
                  </Link>
                </Button>
                {sermon.audioUrl && (
                  <Button variant="outline" className="border-church-gold/40 text-church-gold hover:border-church-gold hover:text-church-gold bg-transparent font-cinzel tracking-[0.12em] uppercase text-xs h-9 px-5">
                    <Download className="h-3.5 w-3.5 mr-2" />
                    Download
                  </Button>
                )}
                <Button variant="ghost" asChild className="text-foreground/80 hover:text-church-gold hover:bg-transparent font-cinzel tracking-[0.12em] uppercase text-xs h-9 px-4">
                  <Link href={`/sermons/${sermon.slug}`}>Read Notes →</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
