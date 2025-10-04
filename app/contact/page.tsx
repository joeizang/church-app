import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
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
            We'd love to hear from you! Reach out with questions, prayer requests, or to learn more about what the Lord is doing in us and through us.
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
                  <p className="text-gray-600 mb-2">5 Korinjoh House</p>
                  <p className="text-gray-600 mb-2">Murtala Mohammed Way, before British-American Junction, Jos, Nigeria</p>
                  <p className="text-sm text-gray-500">
                    
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
                  <p className="text-gray-600 mb-2 font-medium">(080) Not a real Number</p>
                  <p className="text-sm text-gray-500">Office hours: Monday - Friday, 9:00 AM - 4:00 PM</p>
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
                  <p className="text-gray-600 mb-2">courtyardoftruth@gmail.com</p>
                  {/* <p className="text-gray-600 mb-2">pastor@courtyardoftruth.org</p> */}
                  <p className="text-sm text-gray-500">We typically respond as soon as possible.</p>
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
                      <span className="font-medium text-church-purple">9:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tuesday Bible Study</span>
                      <span className="font-medium text-church-purple">5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prayer Hour</span>
                      <span className="font-medium text-church-purple">5:30 PM</span>
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

      <Footer />
    </div>
  )
}
