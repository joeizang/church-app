import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, BookOpen, Camera } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-church-purple/30 via-gray-100 to-church-gold/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-church-purple mb-6 text-balance">
            Welcome to Courtyard of Truth
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
            A place where faith meets community, and truth illuminates our path forward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-church-purple hover:bg-church-purple/90 text-white">
              Join Us This Sunday
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-church-gold text-church-purple hover:bg-church-gold/10 bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-church-purple/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-church-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-church-purple" />
              </div>
              <h3 className="font-semibold text-church-purple mb-2">Sunday Service</h3>
              <p className="text-gray-600 text-sm">Join us every Sunday at 10:00 AM for worship and fellowship</p>
            </CardContent>
          </Card>

          <Card className="border-church-gold/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-church-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-church-gold" />
              </div>
              <h3 className="font-semibold text-church-purple mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Build lasting relationships in our welcoming church family</p>
            </CardContent>
          </Card>

          <Card className="border-church-red/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-church-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-church-red" />
              </div>
              <h3 className="font-semibold text-church-purple mb-2">Sermons</h3>
              <p className="text-gray-600 text-sm">
                <Link href="/sermons" className="hover:text-church-red transition-colors">
                  Listen to inspiring messages
                </Link>
              </p>
            </CardContent>
          </Card>

          <Card className="border-church-purple/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-church-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-church-purple" />
              </div>
              <h3 className="font-semibold text-church-purple mb-2">Gallery</h3>
              <p className="text-gray-600 text-sm">
                <Link href="/gallery" className="hover:text-church-purple transition-colors">
                  View our community moments
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
