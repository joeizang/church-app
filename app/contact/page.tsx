import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Courtyard of Truth",
  description: "Get in touch with Courtyard of Truth. Find our location, service times, and contact information.",
}

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    color: "text-church-red",
    border: "border-church-red/25",
    lines: ["5 Korinjoh House", "Murtala Mohammed Way, before British-American Junction", "Jos, Nigeria"],
  },
  {
    icon: Phone,
    title: "Call Us",
    color: "text-church-gold",
    border: "border-church-gold/25",
    lines: ["(080) Not a real Number", "Office hours: Mon – Fri, 9:00 AM – 4:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    color: "text-church-purple",
    border: "border-church-purple/30",
    lines: ["courtyardoftruth@gmail.com", "We typically respond as soon as possible."],
  },
  {
    icon: Clock,
    title: "Service Times",
    color: "text-church-gold",
    border: "border-church-gold/25",
    times: [
      { label: "Sunday Worship",      value: "9:00 AM" },
      { label: "Tuesday Bible Study", value: "5:30 PM" },
      { label: "Prayer Hour",         value: "5:30 PM" },
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 overflow-hidden section-purple bg-sacred-grid">
        <div className="absolute inset-0 pointer-events-none section-vignette" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">Reach Out</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <p className="text-foreground/85 text-lg max-w-xl mx-auto leading-relaxed">
            We&rsquo;d love to hear from you — questions, prayer requests, or just to say hello.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <h2 className="font-cinzel text-xl text-foreground mb-8 tracking-wider">Get in Touch</h2>
              <div className="space-y-4">
                {contactCards.map(({ icon: Icon, title, color, border, lines, times }) => (
                  <div key={title} className={`bg-background border ${border} rounded-lg p-5 flex gap-4`}>
                    <div className={`${color} shrink-0 mt-0.5`}><Icon className="h-5 w-5" /></div>
                    <div>
                      <h3 className={`font-cinzel text-xs tracking-widest uppercase ${color} mb-2`}>{title}</h3>
                      {lines?.map((line) => (
                        <p key={line} className="text-foreground/85 text-base leading-relaxed">{line}</p>
                      ))}
                      {times && (
                        <div className="space-y-1.5 mt-1">
                          {times.map(({ label, value }) => (
                            <div key={label} className="flex justify-between gap-6 text-base">
                              <span className="text-foreground/80">{label}</span>
                              <span className={`${color} font-medium whitespace-nowrap`}>{value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-cinzel text-xl text-foreground mb-8 tracking-wider">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-2xl text-foreground text-center mb-10">Find Us</h2>
          <div className="bg-card border border-church-gold/20 rounded-lg h-72 flex flex-col items-center justify-center gap-3">
            <MapPin className="h-10 w-10 text-church-gold/80" />
            <p className="text-muted-foreground font-cinzel text-xs tracking-widest uppercase">
              Interactive map coming soon
            </p>
            <p className="text-foreground/85 text-base">5 Korinjoh House, Murtala Mohammed Way, Jos</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
