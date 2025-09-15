import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const announcements = [
    "Weekend Whiz: Weekly Quiz Series - Every Sunday, 8pm",
    "General Aptitude Test - August 6, 2025",
    "ASME Core Handover Ceremony - July 10, 2025",
    "New ASME Core Team Announced for 2025-26"
  ];

  const highlights = [
    {
      title: "Weekend Whiz: Weekly Quiz Series",
      description: "Weekend Whiz is a weekly quiz series conducted every Sunday at 8pm, designed to challenge and enhance the technical knowledge in mechanical engineering.",
      image: "src/components/images/Weekend_Whiz.jpeg"
    },
    {
      title: "General Aptitude Test",
      description: "A comprehensive aptitude test held on August 6, 2025, aimed at assessing and improving the problem-solving skills required for job interviews (aptitude test stage).",
      image: "src/components/images/Aptitude_Test3.jpeg"
    },
    {
      title: "ASME Core Handover Ceremony",
      description: "The ASME Core Handover Ceremony held on July 10, 2025, marked the transition of leadership to the new core team, celebrating their commitment to advancing the chapter's mission.",
      image: "src/components/images/Core_Handover.jpeg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="src/components/images/Core.jpeg"
            alt="Engineering students workshop"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ASME Student Section
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-200">
              Govt. Model Engineering College
            </p>
            <p className="text-lg md:text-xl mb-8 text-accent">
              "Nurturing Norms for Technical Values"
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Join ASME
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Latest Announcements</h2>
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Badge variant="secondary" className="mt-1">
                    New
                  </Badge>
                  <p className="text-gray-700">{announcement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Recent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{highlight.title}</CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-200">
            Subscribe to our newsletter for the latest updates on events, achievements, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}