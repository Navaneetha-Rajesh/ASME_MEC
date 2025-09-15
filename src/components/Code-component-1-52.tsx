import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function PublicationsPage() {
  const newsletters = [
    {
      title: "MechTech Quarterly",
      issue: "Vol 6, Issue 1",
      date: "January 2025",
      description: "Latest developments in sustainable manufacturing, student research highlights, and industry trends.",
      pages: 32,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "MechTech Quarterly",
      issue: "Vol 5, Issue 4",
      date: "October 2024",
      description: "Special issue on AI in mechanical engineering, featuring student projects and industry insights.",
      pages: 28,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "MechTech Quarterly",
      issue: "Vol 5, Issue 3",
      date: "July 2024",
      description: "Focus on renewable energy technologies and sustainable design practices.",
      pages: 24,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "MechTech Quarterly",
      issue: "Vol 5, Issue 2",
      date: "April 2024",
      description: "Coverage of ASME Design Competition 2024 and emerging manufacturing technologies.",
      pages: 30,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "MechTech Quarterly",
      issue: "Vol 5, Issue 1",
      date: "January 2024",
      description: "New year special featuring career guidance and industry outlook for mechanical engineers.",
      pages: 26,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "MechTech Quarterly",
      issue: "Vol 4, Issue 4",
      date: "October 2023",
      description: "Automation and robotics in manufacturing, student achievements, and alumni spotlights.",
      pages: 22,
      downloadUrl: "#",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    }
  ];

  const resources = [
    {
      category: "Membership Resources",
      title: "ASME Membership Guide",
      description: "Complete guide to ASME membership benefits, career resources, and professional development opportunities.",
      type: "Guide",
      url: "https://asme.org/membership"
    },
    {
      category: "Technical Resources",
      title: "Engineering Standards & Codes",
      description: "Access to ASME codes and standards for mechanical engineering design and analysis.",
      type: "Standards",
      url: "https://asme.org/codes-standards"
    },
    {
      category: "Career Development",
      title: "Professional Development Tools",
      description: "Career planning resources, certification programs, and continuing education opportunities.",
      type: "Tools",
      url: "https://asme.org/career-education"
    },
    {
      category: "Learning Resources",
      title: "ASME Digital Collection",
      description: "Access to technical papers, conference proceedings, and engineering research publications.",
      type: "Library",
      url: "https://asme.org/publications-submissions"
    },
    {
      category: "Student Resources",
      title: "Student Design Competitions",
      description: "Information about upcoming design competitions, rules, and registration guidelines.",
      type: "Competitions",
      url: "https://asme.org/student-resources"
    },
    {
      category: "Industry Insights",
      title: "Manufacturing Technology Trends",
      description: "Latest trends and innovations in manufacturing technology and industry 4.0.",
      type: "Reports",
      url: "https://asme.org/topics-resources"
    }
  ];

  const researchPapers = [
    {
      title: "AI-Driven Predictive Maintenance in Manufacturing Systems",
      authors: "Arun Menon, Sneha Varma, Dr. Rajesh Kumar",
      journal: "ASME Journal of Manufacturing Systems",
      year: "2024",
      type: "Research Paper",
      abstract: "This paper presents a novel approach to predictive maintenance using machine learning algorithms..."
    },
    {
      title: "Sustainable Design Practices in Mechanical Engineering",
      authors: "Rohit Nair, Priya Krishna, Prof. Meera Nair",
      journal: "International Journal of Sustainable Engineering",
      year: "2024",
      type: "Review Paper",
      abstract: "A comprehensive review of sustainable design methodologies and their implementation in mechanical engineering..."
    },
    {
      title: "Optimization of 3D Printing Parameters for Enhanced Mechanical Properties",
      authors: "Kartik Sharma, Anjali Pillai",
      journal: "Additive Manufacturing Journal",
      year: "2023",
      type: "Technical Paper",
      abstract: "Investigation of optimal 3D printing parameters to achieve superior mechanical properties in printed components..."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Publications & Resources</h1>
          <p className="text-xl text-gray-600">
            Stay informed with our latest publications and access valuable engineering resources
          </p>
        </div>

        <Tabs defaultValue="newsletters" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="resources">ASME Resources</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
          </TabsList>

          <TabsContent value="newsletters" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">MechTech Quarterly</h2>
              <p className="text-lg text-gray-600">
                Our flagship publication featuring technical articles, student achievements, and industry insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((newsletter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center text-white overflow-hidden">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">{newsletter.title}</h3>
                        <p className="text-lg">{newsletter.issue}</p>
                        <p className="text-sm text-gray-200 mt-2">{newsletter.date}</p>
                      </div>
                    </div>
                    <CardTitle className="text-primary">{newsletter.issue}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {newsletter.date} • {newsletter.pages} pages
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">{newsletter.description}</p>
                    
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {newsletter.pages} pages
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PDF
                      </Badge>
                    </div>

                    <Button 
                      className="w-full bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <a href={newsletter.downloadUrl} download>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8M4 14h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="bg-muted p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest issues delivered to your inbox and stay updated with ASME MEC activities
                </p>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Subscribe Now
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">ASME Membership Resources</h2>
              <p className="text-lg text-gray-600">
                Access valuable resources and tools for professional development and technical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="mb-2">
                        {resource.category}
                      </Badge>
                      <Badge className="bg-secondary text-secondary-foreground">
                        {resource.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-primary">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      variant="outline"
                      asChild
                    >
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Access Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Become an ASME Member</h3>
                <p className="text-lg text-gray-200 mb-6">
                  Join the world's largest organization of mechanical engineers and access exclusive resources, 
                  networking opportunities, and career development tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Join ASME
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Student Research Publications</h2>
              <p className="text-lg text-gray-600">
                Research papers and technical contributions by our student section members
              </p>
            </div>

            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-primary text-primary-foreground">
                        {paper.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{paper.year}</span>
                    </div>
                    <CardTitle className="text-primary text-xl">{paper.title}</CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {paper.authors}
                    </CardDescription>
                    <p className="text-sm text-gray-600 italic">{paper.journal}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Abstract:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{paper.abstract}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Abstract
                      </Button>
                      <Button variant="outline" size="sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8M4 14h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
                        </svg>
                        Download Paper
                      </Button>
                      <Button variant="outline" size="sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Journal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="bg-accent/20 border border-accent p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Publish Your Research</h3>
                <p className="text-gray-600 mb-4">
                  Have research work to share? Submit your papers to be featured in our publications
                </p>
                <Button className="bg-accent hover:bg-accent/90">
                  Submit Paper
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}