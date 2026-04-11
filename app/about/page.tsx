import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Heart, Users, Brain } from "lucide-react"

export const metadata = {
  title: "About Us - Courtyard of Truth",
  description:
    "Learn about Courtyard of Truth's mission, values, and the passionate team dedicated to serving our community in faith and love.",
}

const leadership = [
  { name: "Bro. Oluwafemi Bamgboye", title: "Pioneer & Senior Pastor", initials: "OB" },
  { name: "Sis. IfeOluwa Bamgboye", title: "Pastor", initials: "IB" },
  { name: "Bro. Joseph Izang", title: "Resident Pastor", initials: "JI" },
  { name: "Bro. Shile O", title: "Minister", initials: "SO" },
  { name: "Bro. Joshua Gingin", title: "Director of Media", initials: "JG" },
  { name: "Sis. Winifred Wang", title: "Pastor, Plated Generation", initials: "WW" },
  { name: "Bro. Sam Udoh", title: "Director, City Impact", initials: "SU" },
  { name: "Sis. Sydney Udoh", title: "Music Director, Flow", initials: "SU" },
  { name: "Bro. Pam Gyang", title: "Community Outreach", initials: "PG" },
]

const values = [
  {
    icon: BookOpen,
    title: "Truth",
    verse: "John 8:32",
    body: "Genuine freedom is found in embracing God's unaltered truth, freeing us from the bonds of deception and sin.",
    iconColor: "text-church-red",
    titleColor: "text-church-red",
    topBar: "bg-church-red",
    border: "border-church-red/30",
  },
  {
    icon: Heart,
    title: "Intimate Knowledge",
    verse: "John 17:3, 17",
    body: "True life begins with an intimate knowledge of God and is sustained by the sanctifying power of His Word.",
    iconColor: "text-church-gold",
    titleColor: "text-church-gold",
    topBar: "bg-church-gold",
    border: "border-church-gold/30",
  },
  {
    icon: Users,
    title: "Community",
    verse: "Psalms 92:12–13",
    body: "Spiritual growth and vitality for those rooted in God's presence — a sacred courtyard of nourishment and strength.",
    iconColor: "text-church-purple",
    titleColor: "text-church-purple",
    topBar: "bg-church-purple",
    border: "border-church-purple/35",
  },
  {
    icon: Brain,
    title: "Deeper Understanding",
    verse: "Psalms 103:7",
    body: "God desires to reveal not just His miracles, but His character and principles — inviting us into deeper knowledge of how He operates.",
    iconColor: "text-church-red",
    titleColor: "text-church-red",
    topBar: "bg-church-red",
    border: "border-church-red/30",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative py-20 overflow-hidden section-purple bg-sacred-grid">
        <div className="absolute inset-0 pointer-events-none section-vignette" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">Who We Are</p>
          <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-6">
            About Courtyard of Truth
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-foreground/85 text-lg leading-relaxed">
          <p>
            The Courtyard of Truth is a vibrant assembly of believers in, and devoted followers of, Jesus Christ.
            We are a community united by our shared faith, and committed to exploring and living out the profound
            teachings of the Bible. Founded on the principles of authenticity, clarity, and transformation, The
            Courtyard serves as a spiritual haven where individuals from all walks of life can deepen their
            relationship with God.
          </p>
          <p>
            At the heart of our ministry is a passion for unveiling the pure, unadulterated Truth found in God&rsquo;s
            Word. We believe that true freedom and fulfillment come from understanding and applying these timeless
            principles in everyday life. Whether you&rsquo;re a lifelong Christian seeking deeper insights or someone
            new to the faith journey, The Courtyard of Truth welcomes you to join us in this pursuit of divine wisdom.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">Why We Exist</p>
          <h2 className="font-cinzel text-3xl text-foreground mb-8">Our Mission</h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
            <span className="text-church-gold text-xs">✦</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
          </div>
          <div className="space-y-5 text-foreground/85 text-lg leading-relaxed mb-12">
            <p>
              The Courtyard of Truth exists to expose believers to the unblemished truth of God&rsquo;s Word in a clear,
              practical, and life-impacting way. Our ultimate goal is to see human societies reformed and transformed
              through the power of Scripture.
            </p>
            <p>
              In a world filled with distractions and diluted messages, we prioritize straightforward teaching that
              bridges ancient truths with modern challenges. Through Bible-centered discussions, worship sessions,
              and practical applications, we aim to inspire lives that reflect God&rsquo;s love, justice, and mercy.
            </p>
          </div>
          <div className="border-l-2 border-church-gold pl-6 text-left max-w-2xl mx-auto">
            <p className="text-foreground text-xl italic leading-relaxed">
              &ldquo;In a world filled with distractions and diluted messages, we prioritize straightforward teaching
              that bridges ancient truths with modern challenges.&rdquo;
            </p>
            <span className="text-church-gold text-xs font-cinzel tracking-widest uppercase mt-3 block">
              — Our Mission Statement
            </span>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">What Guides Us</p>
            <h2 className="font-cinzel text-3xl text-foreground mb-6">Our Core Values</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
              <span className="text-church-gold text-xs">✦</span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, verse, body, iconColor, titleColor, topBar, border }) => (
              <div
                key={title}
                className={`bg-background border ${border} rounded-lg overflow-hidden flex flex-col hover:border-opacity-70 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Colored top accent bar */}
                <div className={`h-1 w-full ${topBar}`} />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className={iconColor}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className={`font-cinzel text-sm tracking-wider uppercase ${titleColor} mb-1.5`}>
                      {title}
                    </h3>
                    <p className="text-church-gold text-xs font-cinzel tracking-widest">{verse}</p>
                  </div>
                  <p className="text-foreground/85 text-base leading-relaxed italic flex-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Those Who Serve</p>
            <h2 className="font-cinzel text-3xl text-foreground mb-6">Our Leadership Team</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-church-gold/50" />
              <span className="text-church-gold text-xs">✦</span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-church-gold/50" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-church-gold/15 rounded-lg p-6 flex items-center gap-5 hover:border-church-gold/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-full border-2 border-church-gold/40 flex items-center justify-center bg-church-gold/5 shrink-0">
                  <span className="font-cinzel text-sm text-church-gold">{member.initials}</span>
                </div>
                <div>
                  <h3 className="font-cinzel text-xs tracking-wider text-foreground mb-1">{member.name}</h3>
                  <p className="text-church-gold text-xs">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
