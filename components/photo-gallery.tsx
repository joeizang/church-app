"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
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
  {
    id: 1,
    src: "/church-worship-service-congregation-singing.jpg",
    alt: "Sunday Worship Service",
    category: "Worship",
    title: "Sunday Morning Worship",
  },
  {
    id: 2,
    src: "/church-baptism-ceremony-water-celebration.jpg",
    alt: "Baptism Ceremony",
    category: "Sacraments",
    title: "Baptism Celebration",
  },
  {
    id: 3,
    src: "/church-youth-group-activities-teenagers-fellowship.jpg",
    alt: "Youth Group Activities",
    category: "Youth",
    title: "Youth Fellowship",
  },
  {
    id: 4,
    src: "/church-community-dinner-fellowship-hall-families.jpg",
    alt: "Community Dinner",
    category: "Fellowship",
    title: "Community Dinner",
  },
  {
    id: 5,
    src: "/church-choir-singing-robes-music-ministry.jpg",
    alt: "Church Choir",
    category: "Music",
    title: "Choir Ministry",
  },
  {
    id: 6,
    src: "/church-children-sunday-school-learning-bible-stori.jpg",
    alt: "Children's Sunday School",
    category: "Children",
    title: "Children's Ministry",
  },
  {
    id: 7,
    src: "/church-christmas-service-nativity-celebration-cand.jpg",
    alt: "Christmas Service",
    category: "Special Events",
    title: "Christmas Celebration",
  },
  {
    id: 8,
    src: "/church-easter-service-resurrection-celebration-flo.jpg",
    alt: "Easter Service",
    category: "Special Events",
    title: "Easter Sunday",
  },
  {
    id: 9,
    src: "/church-bible-study-group-discussion-learning-toget.jpg",
    alt: "Bible Study Group",
    category: "Education",
    title: "Wednesday Bible Study",
  },
  {
    id: 10,
    src: "/church-volunteer-outreach-community-service-helpin.jpg",
    alt: "Community Outreach",
    category: "Outreach",
    title: "Community Service",
  },
  {
    id: 11,
    src: "/church-wedding-ceremony-bride-groom-celebration.jpg",
    alt: "Wedding Ceremony",
    category: "Sacraments",
    title: "Wedding Blessing",
  },
  {
    id: 12,
    src: "/church-prayer-meeting-hands-together-spiritual-gat.jpg",
    alt: "Prayer Meeting",
    category: "Prayer",
    title: "Prayer Circle",
  },
]

const categories = [
  "All",
  "Worship",
  "Fellowship",
  "Youth",
  "Children",
  "Music",
  "Special Events",
  "Sacraments",
  "Education",
  "Outreach",
  "Prayer",
]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    setCurrentIndex(filteredPhotos.findIndex((p) => p.id === photo.id))
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setCurrentIndex(nextIndex)
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setCurrentIndex(prevIndex)
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-church-purple mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-church-purple hover:bg-church-purple/90 text-white"
                  : "border-church-purple text-church-purple hover:bg-church-purple/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
            onClick={() => openLightbox(photo)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-church-purple mb-1">{photo.title}</h3>
              <p className="text-sm text-church-gold">{photo.category}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {filteredPhotos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="text-xl font-semibold mb-1">{selectedPhoto.title}</h3>
                <p className="text-church-gold">{selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-8 text-center text-gray-600">
        Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? "photo" : "photos"}
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
      </div>
    </div>
  )
}
