import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Handshake } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Mission — three pillars */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-foreground mb-6">Our Mission</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
              <span className="text-church-gold text-xs">✦</span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
            </div>
            <p className="text-foreground/85 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              At Courtyard of Truth, we are committed to spreading God&rsquo;s love, building a strong community,
              and helping each person discover their purpose in Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Love",
                color: "text-church-red",
                border: "border-church-red/30",
                top: "bg-church-red",
                body: "We believe in the transformative power of God's love and strive to share it with everyone we meet.",
              },
              {
                icon: BookOpen,
                title: "Truth",
                color: "text-church-gold",
                border: "border-church-gold/30",
                top: "bg-church-gold",
                body: "We are grounded in Biblical truth and committed to teaching God's Word with clarity and compassion.",
              },
              {
                icon: Handshake,
                title: "Community",
                color: "text-church-purple",
                border: "border-church-purple/35",
                top: "bg-church-purple",
                body: "We foster genuine relationships and create a welcoming space for all to grow in faith together.",
              },
            ].map(({ icon: Icon, title, color, border, top, body }) => (
              <div
                key={title}
                className={`group bg-background border ${border} rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`h-1 w-full ${top}`} />
                <div className="p-8 text-center">
                  <div className={`${color} flex justify-center mb-5`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className={`font-cinzel text-lg tracking-widest uppercase ${color} mb-4`}>{title}</h3>
                  <p className="text-foreground/85 leading-relaxed text-base">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden section-crimson">
        <div className="absolute inset-0 bg-sacred-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">You Are Welcome Here</p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <p className="text-foreground/85 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            If you&rsquo;re ready to dive deeper into God&rsquo;s Word and experience transformative worship,
            we invite you to connect with The Courtyard of Truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-church-gold hover:bg-church-gold/90 text-background font-cinzel tracking-[0.15em] uppercase text-xs px-8 py-6 shadow-[0_0_24px_oklch(0.82_0.16_64/0.3)]" asChild>
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/40 text-foreground hover:border-church-gold hover:text-church-gold bg-transparent font-cinzel tracking-[0.15em] uppercase text-xs px-8 py-6" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
