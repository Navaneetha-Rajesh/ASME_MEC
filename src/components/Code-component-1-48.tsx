import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AchievementsPage() {
  const achievements = [
    {
      year: "2024",
      title: "Outstanding Student Section Award",
      category: "ASME International Recognition",
      description: "Received the prestigious Outstanding Student Section Award from ASME International for exceptional contribution to student development and technical activities.",
      impact: "This recognition places MEC ASME among the top 10 student sections globally.",
      type: "award",
      level: "International"
    },
    {
      year: "2024",
      title: "National Design Competition - First Place",
      category: "ASME Student Design Competition",
      description: "Team 'InnoMech' won first place in the national level ASME Student Design Competition with their innovative sustainable manufacturing solution.",
      impact: "₹2,00,000 cash prize and opportunity to represent India at international level.",
      type: "competition",
      level: "National"
    },
    {
      year: "2023",
      title: "Best Technical Paper Award",
      category: "ASME India Conference",
      description: "Student paper on 'AI-Driven Predictive Maintenance in Manufacturing' won the best technical paper award at ASME India Annual Conference.",
      impact: "Publication in ASME Journal and research collaboration opportunity.",
      type: "research",
      level: "National"
    },
    {
      year: "2023",
      title: "Community Impact Initiative",
      category: "Social Responsibility",
      description: "Successfully conducted 'Engineers for Society' program, providing technical education to 500+ underprivileged students in rural Kerala.",
      impact: "Established 5 mobile STEM labs and trained 25 local teachers.",
      type: "community",
      level: "Regional"
    },
    {
      year: "2023",
      title: "Innovation Hub Establishment",
      category: "Infrastructure Development",
      description: "Established state-of-the-art Innovation Hub with 3D printing, CNC machines, and IoT development kits for student projects.",
      impact: "₹50,00,000 worth equipment benefiting 1000+ students annually.",
      type: "infrastructure",
      level: "Institutional"
    },
    {
      year: "2022",
      title: "Industry Partnership Excellence",
      category: "Collaboration",
      description: "Formed strategic partnerships with 15+ leading engineering companies for internships, projects, and placement opportunities.",
      impact: "95% placement rate with average salary increase of 40%.",
      type: "partnership",
      level: "Regional"
    },
    {
      year: "2022",
      title: "Research Publication Milestone",
      category: "Academic Excellence",
      description: "Student section members published 12 research papers in peer-reviewed international journals and conferences.",
      impact: "Enhanced academic reputation and research opportunities.",
      type: "research",
      level: "International"
    },
    {
      year: "2021",
      title: "COVID-19 Innovation Challenge Winner",
      category: "Healthcare Innovation",
      description: "Developed low-cost ventilator design during pandemic, winning national healthcare innovation challenge.",
      impact: "Technology transferred to local manufacturer, helping 200+ patients.",
      type: "innovation",
      level: "National"
    }
  ];

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "award":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case "competition":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "research":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case "community":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "infrastructure":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "partnership":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V9a2 2 0 11-4 0V6m0 0V4.5a2 2 0 10-4 0V6m4 0H8m5 5v.01M8 19l4-7 4 7M8 19l-2-2m2 2l2-2m8-2l-2-2m2 2l2-2" />
          </svg>
        );
      case "innovation":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "International": return "bg-red-100 text-red-800 border-red-200";
      case "National": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Regional": return "bg-green-100 text-green-800 border-green-200";
      case "Institutional": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Achievements</h1>
          <p className="text-xl text-gray-600">
            Celebrating excellence in engineering, innovation, and community impact
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-gradient-to-br from-primary to-secondary text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-200">Major Awards</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-secondary to-accent text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm text-gray-200">National Wins</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-accent to-primary text-accent-foreground">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">₹75L+</div>
              <div className="text-sm opacity-80">Total Prize Money</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-primary/80 to-secondary/80 text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm text-gray-200">Students Impacted</div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="p-2 bg-accent/20 rounded-lg text-accent">
                            {getAchievementIcon(achievement.type)}
                          </div>
                          <Badge className={`text-xs ${getLevelColor(achievement.level)}`}>
                            {achievement.level}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{achievement.year}</div>
                        </div>
                      </div>
                      <CardTitle className="text-primary">{achievement.title}</CardTitle>
                      <CardDescription className="text-secondary font-medium">
                        {achievement.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{achievement.description}</p>
                      
                      <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                        <h4 className="font-semibold text-accent-foreground mb-1">Impact:</h4>
                        <p className="text-sm text-gray-700">{achievement.impact}</p>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Next Achievement</h2>
            <p className="text-xl mb-6 text-gray-200">
              Join our ASME Student Section and contribute to our legacy of excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Join ASME Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View All Achievements
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}