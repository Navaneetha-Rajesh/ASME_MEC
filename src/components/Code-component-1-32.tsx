import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const announcements = [
    "Registration for ASME Design Competition 2025 is now open",
    "Monthly technical talk on 'Advanced Manufacturing' - Jan 25th",
    "New membership drive for Spring 2025 semester",
    "Workshop on CAD/CAM scheduled for February 10-12"
  ];

  const highlights = [
    {
      title: "Outstanding Student Section Award",
      description: "Recognized by ASME International for excellence in student activities and member engagement.",
      image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc21lJTIwbWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nJTIwYXdhcmQlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NTc2NjUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "National Design Challenge Winner",
      description: "Our team secured first place in the ASME National Student Design Competition.",
      image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3AlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc1NzY2NTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Industry Partnership Program",
      description: "Successful collaboration with leading engineering companies for internships and projects.",
      image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBsZWFkZXJzaGlwJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzY2NTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3AlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc1NzY2NTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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