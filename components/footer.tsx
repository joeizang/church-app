import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-church-gold/25">

      {/* Ornamental top bar */}
      <div className="flex items-center justify-center gap-4 py-6 px-4">
        <div className="h-px flex-1 max-w-xs bg-linear-to-r from-transparent to-church-gold/50" />
        <div className="flex items-center gap-2 text-church-gold">
          <span className="text-xs">✦</span>
          <Image src="/images/church-logo.png" alt="" width={28} height={28} className="w-7 h-7 opacity-80" />
          <span className="text-xs">✦</span>
        </div>
        <div className="h-px flex-1 max-w-xs bg-linear-to-l from-transparent to-church-gold/50" />
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/church-logo.png" alt="Courtyard of Truth" width={44} height={44} className="w-11 h-11" />
              <span className="font-cinzel text-sm tracking-[0.2em] text-church-gold uppercase">
                Courtyard of Truth
              </span>
            </div>
            <p className="text-foreground/80 text-base leading-relaxed max-w-xs mb-6">
              A vibrant assembly of believers devoted to exploring the unblemished truth of God&rsquo;s
              Word — illuminating lives, families, and communities.
            </p>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              &copy; {year} Courtyard of Truth. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/sermons", label: "Sermons" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/80 hover:text-church-gold text-base transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service times */}
          <div>
            <h4 className="eyebrow mb-5">Gather With Us</h4>
            <ul className="space-y-3 text-base">
              {[
                { day: "Sunday Worship", time: "9:00 AM" },
                { day: "Tuesday Bible Study", time: "5:30 PM" },
                { day: "Friday Hour of Prayer", time: "5:30 PM" },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-foreground/80">{day}</span>
                  <span className="text-church-gold font-medium whitespace-nowrap">{time}</span>
                </li>
              ))}
              <li className="pt-3 border-t border-church-gold/20">
                <p className="text-foreground/85 text-sm leading-relaxed">
                  5 Korinjoh House<br />
                  Murtala Mohammed Way, Jos
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
