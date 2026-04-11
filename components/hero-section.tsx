import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-background bg-sacred-grid">

      {/* Radial glow */}
      <div className="absolute inset-0 section-hero pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none section-vignette" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-church-gold/15 blur-2xl scale-150" />
            <Image
              src="/images/church-logo.png"
              alt="Courtyard of Truth"
              width={96}
              height={96}
              className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_24px_oklch(0.82_0.16_64/0.4)]"
            />
          </div>
        </div>

        {/* Ornamental rule */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up animate-delay-100">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-church-gold/70" />
          <span className="text-church-gold text-xs tracking-[0.4em] uppercase">Est. in Faith</span>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-church-gold/70" />
        </div>

        {/* Heading */}
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl uppercase tracking-wide text-foreground leading-[1.1] mb-6 animate-fade-up animate-delay-200">
          Welcome to{" "}
          <span className="block text-gold-shimmer mt-2">
            Courtyard of Truth
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/85 italic font-sans leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-300">
          We exist to expose believers to the unblemished truth of God's Word in a clear, practical and life-impacting way.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-up animate-delay-400">
          <Button
            size="lg"
            className="bg-church-gold hover:bg-church-gold/90 text-background font-cinzel tracking-[0.15em] uppercase text-xs px-8 py-6 shadow-[0_0_24px_oklch(0.82_0.16_64/0.35)]"
          >
            Join Us This Sunday
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-church-gold/50 text-church-gold hover:bg-church-gold/10 hover:border-church-gold bg-transparent font-cinzel tracking-[0.15em] uppercase text-xs px-8 py-6"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: "Sunday Service",  desc: "Join us every Sunday at 9:00 AM for worship and fellowship",      color: "text-church-gold",   border: "border-church-gold/30 hover:border-church-gold/60" },
            { icon: Users,    label: "Community",       desc: "We build community through sharing the Truth & Love",       color: "text-church-purple", border: "border-church-purple/35 hover:border-church-purple/65" },
            { icon: BookOpen, label: "Sermons",         desc: "Listen to inspiring messages rooted in God's Word",               color: "text-church-red",    border: "border-church-red/30 hover:border-church-red/60",   href: "https://courtyard.mixlr.com" },
            { icon: Camera,   label: "Gallery",         desc: "View our community moments and celebrations",                     color: "text-church-gold",   border: "border-church-gold/30 hover:border-church-gold/60", href: "/gallery" },
          ].map(({ icon: Icon, label, desc, color, border, href }) => {
            const inner = (
              <div className={`bg-card/70 backdrop-blur-sm border ${border} rounded-lg p-6 text-center transition-all duration-300 hover:bg-card`}>
                <div className={`${color} flex justify-center mb-3`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`font-cinzel text-xs tracking-[0.15em] uppercase ${color} mb-2`}>{label}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{desc}</p>
              </div>
            )
            return href
              ? <Link key={label} href={href} className="block">{inner}</Link>
              : <div key={label}>{inner}</div>
          })}
        </div>
      </div>
    </div>
  )
}
