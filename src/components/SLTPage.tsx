import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SLTPage() {
  const hodMessage = {
    name: "Dr. Srinivas P",
    title: "Head of Department, Mechanical Engineering",
    image: "#",
    message: "It gives me immense pleasure to see our ASME Student Section flourishing under the dedicated leadership of our students. The section has consistently demonstrated excellence in promoting technical knowledge, fostering innovation, and building strong industry connections. I am proud of the achievements our students have accomplished and encourage all mechanical engineering students to actively participate in ASME activities. Together, we are shaping the future leaders of mechanical engineering."
  };

  const sltMembers = [
    {
      name: "Meenakshi V J",
      designation: "Chair",
      email: "chair.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Vidhuganga N P",
      designation: "Vice-Chair",
      email: "vicechair.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Ishan",
      designation: "General Secretary",
      email: "secretary.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Jithendranath A M",
      designation: "Joint Secretary",
      email: "treasurer.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Anantesh S Pai",
      designation: "Treasurer",
      email: "technical.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Jothsna Mariyam George",
      designation: "Marketing Subhead",
      email: "events.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Athul Krishnan P A",
      designation: "Event Head",
      email: "pr.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Janaki S",
      designation: "Event Subhead",
      email: "media.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Sacheth P R",
      designation: "Design Head",
      email: "chair.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "B Brahmanarayanan",
      designation: "Design Subhead",
      email: "vicechair.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Hrishikesh C R",
      designation: "Media Head",
      email: "secretary.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Chandra S Nair",
      designation: "Publicity Head",
      email: "treasurer.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Navaneetha Rajesh",
      designation: "Tech Head",
      email: "technical.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Meghashree Girish",
      designation: "Content Head",
      email: "events.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Niya Sunil",
      designation: "Creative Head",
      email: "pr.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Anjana Anoop",
      designation: "Documentation Head",
      email: "media.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Hanna Shibu Mathew",
      designation: "Link Representative",
      email: "technical.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Bharath Krishna",
      designation: "Link Representative",
      email: "events.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Fathima K K",
      designation: "Second Year Representative",
      email: "pr.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    },
    {
      name: "Jewel Rose Shajan",
      designation: "Second Year Representative",
      email: "media.asme@mec.ac.in",
      linkedin: "#",
      image: "#"
    }
  ];

  return (
    <div className="py-12 space-y-16">
      {/* HOD/Advisor's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Meet Our Leadership</h1>
          <p className="text-xl text-gray-600">Dedicated individuals driving excellence in mechanical engineering</p>
        </div>

        <Card className="bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-accent rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={hodMessage.image}
                      alt={hodMessage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{hodMessage.name}</h2>
                    <p className="text-gray-200">{hodMessage.title}</p>
                    <Badge variant="secondary" className="mt-1">Faculty Advisor</Badge>
                  </div>
                </div>
                <blockquote className="text-lg italic text-gray-100 leading-relaxed">
                  "{hodMessage.message}"
                </blockquote>
              </div>
              <div className="relative min-h-[400px] lg:min-h-0">
                <ImageWithFallback
                  src={hodMessage.image}
                  alt="Faculty Advisor"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Student Leadership Team */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Student Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sltMembers.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-primary group-hover:text-secondary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="text-secondary border-secondary">
                      {member.designation}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-sm text-gray-600 hover:text-accent transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="bg-accent text-accent-foreground p-8">
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Leadership Team?</h3>
          <p className="text-lg mb-6">
            We're always looking for passionate and dedicated students to take on leadership roles. 
            Join us in making a difference in the mechanical engineering community.
          </p>
          <Button size="lg" variant="secondary">
            Learn About Opportunities
          </Button>
        </Card>
      </section>
    </div>
  );
}