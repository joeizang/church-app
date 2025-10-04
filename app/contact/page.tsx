import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Courtyard of Truth",
  description:
    "Get in touch with Courtyard of Truth. Find our location, service times, and contact information. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-church-gold text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-church-purple">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with questions, prayer requests, or to learn more about our community.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-church-purple mb-8">Get in Touch</h2>

              <Card className="border-church-purple/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-church-purple">
                    <MapPin className="h-6 w-6 text-church-red" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">123 Faith Avenue</p>
                  <p className="text-gray-600 mb-2">Hope City, HC 12345</p>
                  <p className="text-sm text-gray-500">
                    We're located in the heart of the community, with plenty of parking available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-church-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-church-purple">
                    <Phone className="h-6 w-6 text-church-gold" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2 font-medium">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Office hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>

              <Card className="border-church-red/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-church-purple">
                    <Mail className="h-6 w-6 text-church-red" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">info@courtyardoftruth.org</p>
                  <p className="text-gray-600 mb-2">pastor@courtyardoftruth.org</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours during business days.</p>
                </CardContent>
              </Card>

              <Card className="border-church-purple/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-church-purple">
                    <Clock className="h-6 w-6 text-church-purple" />
                    Service Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday Worship</span>
                      <span className="font-medium text-church-purple">10:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wednesday Bible Study</span>
                      <span className="font-medium text-church-purple">7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday Youth Group</span>
                      <span className="font-medium text-church-purple">6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-church-purple mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-purple text-center mb-8">Find Us</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-church-purple mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Interactive map coming soon</p>
              <p className="text-sm text-gray-500">123 Faith Avenue, Hope City, HC 12345</p>
            </div>
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
                  <a href="/gallery" className="hover:text-church-gold transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-church-gold transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/sermons" className="hover:text-church-gold transition-colors">
                    Sermons
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-church-gold transition-colors">
                    About
                  </a>
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
