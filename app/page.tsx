import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Bike as Bible, Handshake } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* About Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-church-purple mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              At Courtyard of Truth, we are committed to spreading God's love, building a strong community, and helping
              each person discover their purpose in Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-church-red/20">
              <CardHeader>
                <div className="w-16 h-16 bg-church-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-church-red" />
                </div>
                <CardTitle className="text-church-purple">Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the transformative power of God's love and strive to share it with everyone we meet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-church-gold/20">
              <CardHeader>
                <div className="w-16 h-16 bg-church-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bible className="h-8 w-8 text-church-gold" />
                </div>
                <CardTitle className="text-church-purple">Truth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are grounded in Biblical truth and committed to teaching God's Word with clarity and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-church-purple/20">
              <CardHeader>
                <div className="w-16 h-16 bg-church-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-church-purple" />
                </div>
                <CardTitle className="text-church-purple">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We foster genuine relationships and create a welcoming space for all to grow in faith together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-church-purple text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 text-purple-100">
            We'd love to welcome you into our church family. Come as you are and discover the joy of fellowship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-church-gold hover:bg-church-gold/90 text-church-purple font-semibold">
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-church-purple bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-church-gold mb-4">Courtyard of Truth</h3>
              <p className="text-gray-300 mb-4">
                A place where faith meets community, and truth illuminates our path forward together.
              </p>
              <p className="text-gray-400 text-sm">© 2024 Courtyard of Truth. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold text-church-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/gallery" className="hover:text-church-gold transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-church-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/sermons" className="hover:text-church-gold transition-colors">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-church-gold transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-church-gold mb-4">Service Times</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sunday Service: 10:00 AM</li>
                <li>Bible Study: Wed 7:00 PM</li>
                <li>Youth Group: Fri 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
