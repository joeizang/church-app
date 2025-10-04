import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, BookOpen, Handshake, Brain } from "lucide-react"

export const metadata = {
  title: "About Us - Courtyard of Truth",
  description:
    "Learn about Courtyard of Truth's mission, values, and the passionate team dedicated to serving our community in faith and love.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <section className="bg-church-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Courtyard of Truth</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
          The Courtyard of Truth is a vibrant assembly of believers in, and devoted followers of, Jesus Christ. We are a community united by our shared faith, and committed to exploring and living out the profound teachings of the Bible. Founded on the principles of authenticity, clarity, and transformation, The Courtyard serves as a spiritual haven where individuals from all walks of life can deepen their relationship with God.
          </p>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">            
            At the heart of our ministry is a passion for unveiling the pure, unadulterated Truth found in God's Word. We believe that true freedom and fulfillment come from understanding and applying these timeless principles in everyday life. Whether you're a lifelong Christian seeking deeper insights or someone new to the faith journey, The Courtyard of Truth welcomes you to join us in this pursuit of divine wisdom.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-purple mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          The Courtyard of Truth exists to expose believers to the unblemished truth of God's Word in a clear, practical, and life-impacting way. Our ultimate goal is to see human societies reformed and transformed through the power of Scripture. We achieve this by fostering an environment of deep, knowledge-based worship directed toward our Father, the Most High God.</p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          In a world filled with distractions and diluted messages, we prioritize straightforward teaching that bridges ancient truths with modern challenges. Our gatherings, studies, and resources are designed to equip you with actionable insights that not only strengthen your personal faith but also empower you to make a positive difference in your family, community, and beyond. Through Bible-centered discussions, worship sessions, and practical applications, we aim to inspire lives that reflect God's love, justice, and mercy—ultimately contributing to societal renewal grounded in biblical values.
          </p>
          <div className="bg-church-gold/10 border-l-4 border-church-gold p-6 rounded-r-lg">
            <p className="text-lg text-church-purple font-medium italic">
              "In a world filled with distractions and diluted messages, we prioritize straightforward teaching that bridges ancient truths with modern challenges."
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-purple text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-church-red/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-church-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-church-red" />
                </div>
                <CardTitle className="text-church-purple">Truth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                <span className="font-bold">John 8:32</span>
                <div className="text-gray-600 italic">
                  This verse reminds us that genuine freedom is found in embracing God's unaltered truth, freeing us from the bonds of deception and sin.
                </div>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-church-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-church-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-church-gold" />
                </div>
                <CardTitle className="text-church-purple">Intimate Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                <span className="font-bold">John 17:3,17</span> 
                <div className="text-gray-600 italic">
                Highlights that true life begins with an intimate knowledge of God and is sustained by the sanctifying power of His Word.
                </div>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-church-purple/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-church-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-church-purple" />
                </div>
                <CardTitle className="text-church-purple">Community</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600">
                <span className="font-bold">Psalms 92:12-13</span>
                <div className="text-gray-600 italic">
                  These verses paint a picture of spiritual growth and vitality for those rooted in God's presence, much like thriving trees in a sacred courtyard—symbolizing our own community as a place of nourishment and strength.
                </div>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-church-red/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-church-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-church-red" />
                </div>
                <CardTitle className="text-church-purple">Deeper Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                <span className="font-bold">Psalms 103:7</span>
                <div className="text-gray-600 italic">
                  This passage illustrates God's desire to reveal not just His miracles, but His character and principles, inviting us into a deeper understanding of how He operates.
                </div>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-purple text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              [
                {
                  name: "Bro. Oluwafemi Bamgboye",
                  title: "Pioneer & Senior Pastor",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Femi Bamgboye is the pioneer and leads the ministry."
                },
                {
                  name: "Sis. IfeOluwa Bamgboye",
                  title: "Pastor",
                  image: "/images/joseph-izang.jpg",
                  description: "Sis. Ife Bamgboye brings passion for worship and discipleship, leading our small groups and women's ministry with grace."
                },
                
                {
                  name: "Bro. Joseph Izang",
                  title: "Resident Pastor",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Joseph Izang serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },
                {
                  name: "Bro. Shile O",
                  title: "Minister",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Shile O serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },
                {
                  name: "Bro. Joshua Gingin",
                  title: "Director of Media",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Joshua Gingin serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },
                {
                  name: "Sis. Winifred Wang",
                  title: "Pastor, Plated Generation",
                  image: "/images/joseph-izang.jpg",
                  description: "Sis. Winifred Wang serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },
                {
                  name: "Bro. Sam Udoh",
                  title: "Director, City Impact",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Sam Udoh serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },
                {
                  name: "Sis. Sydney Udoh",
                  title: "Music Director, Flow",
                  image: "/images/joseph-izang.jpg",
                  description: "Sis. Sydney Udoh serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },{
                  name: "Bro. Pam Gyang",
                  title: "Community Outreach",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Sam Udoh serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                },{
                  name: "Bro. Sam Udoh",
                  title: "Director, City Impact",
                  image: "/images/joseph-izang.jpg",
                  description: "Bro. Sam Udoh serves with wisdom and dedication, overseeing the resident church in Jos, Nigeria."
                }
              ].map((member) => (
                <Card className="text-center hover:shadow-lg transition-shadow" key={member.name}>
                  <CardHeader>
                    <div className="w-24 h-24 bg-church-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-church-gold">JI</span>
                    </div>
                    <CardTitle className="text-church-purple">{member.name}</CardTitle>
                    <p className="text-church-gold font-medium">{member.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
              </Card>
              ))
            }
          </div>
        </div>
      </section>

      {/* History Section */}
      {/* <section className="py-16 bg-church-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-purple text-center mb-12">Our Story</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-church-purple rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-purple mb-2">The Beginning (2010)</h3>
                <p className="text-gray-600">
                  Courtyard of Truth began as a small group of families meeting in homes, united by a shared vision to
                  create an authentic Christian community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-church-gold rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-purple mb-2">Growing Together (2015)</h3>
                <p className="text-gray-600">
                  As our community grew, we found our current location and began offering regular Sunday services,
                  children's programs, and community outreach.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-church-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-purple mb-2">Expanding Our Reach (2020)</h3>
                <p className="text-gray-600">
                  Through challenges and growth, we've expanded our ministries to include online services, community
                  partnerships, and international missions support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-church-gold text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-church-purple">Join Our Family</h2>
          <p className="text-xl mb-8 text-gray-700">
            We'd love to welcome you into our church community. Come as you are and discover the joy of belonging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-church-purple hover:bg-church-purple/90 text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-church-purple text-church-purple hover:bg-church-purple hover:text-white font-semibold rounded-lg transition-colors bg-transparent"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
