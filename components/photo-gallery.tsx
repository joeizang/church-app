"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

const photos: Photo[] = [
  { id: 1,  src: "/church-worship-service-congregation-singing.jpg",      alt: "Sunday Worship Service",    category: "Worship",        title: "Sunday Morning Worship" },
  { id: 2,  src: "/church-baptism-ceremony-water-celebration.jpg",         alt: "Baptism Ceremony",          category: "Sacraments",     title: "Baptism Celebration" },
  { id: 3,  src: "/church-youth-group-activities-teenagers-fellowship.jpg",alt: "Youth Group Activities",    category: "Youth",          title: "Youth Fellowship" },
  { id: 4,  src: "/church-community-dinner-fellowship-hall-families.jpg",  alt: "Community Dinner",          category: "Fellowship",     title: "Community Dinner" },
  { id: 5,  src: "/church-choir-singing-robes-music-ministry.jpg",         alt: "Church Choir",              category: "Music",          title: "Choir Ministry" },
  { id: 6,  src: "/church-children-sunday-school-learning-bible-stori.jpg",alt: "Children's Sunday School",  category: "Children",       title: "Children's Ministry" },
  { id: 7,  src: "/church-christmas-service-nativity-celebration-cand.jpg",alt: "Christmas Service",         category: "Special Events", title: "Christmas Celebration" },
  { id: 8,  src: "/church-easter-service-resurrection-celebration-flo.jpg",alt: "Easter Service",            category: "Special Events", title: "Easter Sunday" },
  { id: 9,  src: "/church-bible-study-group-discussion-learning-toget.jpg",alt: "Bible Study Group",         category: "Education",      title: "Wednesday Bible Study" },
  { id: 10, src: "/church-volunteer-outreach-community-service-helpin.jpg",alt: "Community Outreach",        category: "Outreach",       title: "Community Service" },
  { id: 11, src: "/church-wedding-ceremony-bride-groom-celebration.jpg",   alt: "Wedding Ceremony",          category: "Sacraments",     title: "Wedding Blessing" },
  { id: 12, src: "/church-prayer-meeting-hands-together-spiritual-gat.jpg",alt: "Prayer Meeting",            category: "Prayer",         title: "Prayer Circle" },
]

const categories = [
  "All", "Worship", "Fellowship", "Youth", "Children", "Music",
  "Special Events", "Sacraments", "Education", "Outreach", "Prayer",
]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((p) => p.category === selectedCategory)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    setCurrentIndex(filteredPhotos.findIndex((p) => p.id === photo.id))
  }
  const closeLightbox = () => setSelectedPhoto(null)
  const nextPhoto = () => {
    const next = (currentIndex + 1) % filteredPhotos.length
    setCurrentIndex(next)
    setSelectedPhoto(filteredPhotos[next])
  }
  const prevPhoto = () => {
    const prev = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setCurrentIndex(prev)
    setSelectedPhoto(filteredPhotos[prev])
  }

  return (
    <div>
      {/* Category filters */}
      <div className="mb-10">
        <p className="eyebrow mb-4">Browse by Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-cinzel text-[0.65rem] tracking-[0.12em] uppercase px-4 py-2 rounded border transition-all duration-200 ${
                  active
                    ? "bg-church-gold text-background border-church-gold"
                    : "bg-transparent text-foreground/80 border-church-gold/20 hover:border-church-gold/50 hover:text-church-gold"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className="group relative aspect-4/3 overflow-hidden rounded-lg border border-church-gold/10 hover:border-church-gold/50 transition-all duration-300 bg-card cursor-pointer"
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-cinzel text-xs tracking-wider text-foreground">{photo.title}</h3>
              <p className="text-church-gold text-[0.65rem] font-cinzel tracking-widest uppercase mt-0.5">
                {photo.category}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-xs font-cinzel tracking-widest uppercase">
          Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? "photo" : "photos"}
          {selectedCategory !== "All" && ` · ${selectedCategory}`}
        </p>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-foreground/85 hover:text-church-gold hover:bg-transparent"
            >
              <X className="h-5 w-5" />
              <span className="font-cinzel text-[0.65rem] tracking-widest uppercase ml-2">Close</span>
            </Button>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden border border-church-gold/20">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                width={900}
                height={675}
                className="w-full max-h-[75vh] object-contain bg-card"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-church-gold/15 px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-cinzel text-sm text-foreground">{selectedPhoto.title}</h3>
                  <p className="text-church-gold text-xs font-cinzel tracking-widest uppercase mt-0.5">
                    {selectedPhoto.category}
                  </p>
                </div>
                <p className="text-muted-foreground text-xs font-cinzel tracking-widest">
                  {currentIndex + 1} / {filteredPhotos.length}
                </p>
              </div>
            </div>

            {/* Prev/Next */}
            {filteredPhotos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  onClick={prevPhoto}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-foreground/85 hover:text-church-gold hover:bg-transparent"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={nextPhoto}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-foreground/85 hover:text-church-gold hover:bg-transparent"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
