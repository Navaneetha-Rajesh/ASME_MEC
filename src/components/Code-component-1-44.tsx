import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EventsPage() {
  const upcomingEvents = [
    {
      title: "Advanced Manufacturing Workshop",
      date: "February 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "MEC Campus",
      description: "Hands-on workshop covering latest manufacturing technologies including 3D printing, CNC machining, and automation.",
      type: "Workshop",
      registrationOpen: true
    },
    {
      title: "ASME Design Competition 2025",
      date: "March 10-12, 2025",
      time: "Full Day Event",
      location: "MEC Campus",
      description: "National level design competition focusing on sustainable engineering solutions and innovation.",
      type: "Competition",
      registrationOpen: true
    },
    {
      title: "Industry Expert Talk: Future of Mechanical Engineering",
      date: "February 28, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium",
      description: "Guest lecture by industry experts on emerging trends and career opportunities in mechanical engineering.",
      type: "Seminar",
      registrationOpen: true
    },
    {
      title: "Student Research Symposium",
      date: "April 5-6, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Conference Hall",
      description: "Platform for students to present their research projects and innovative ideas.",
      type: "Symposium",
      registrationOpen: false
    }
  ];

  const recruitmentOpportunities = [
    {
      position: "Technical Coordinator Assistant",
      department: "Technical Team",
      description: "Assist in organizing technical events and workshops. Perfect for students interested in event management and technical coordination.",
      requirements: ["2nd year or above", "Good communication skills", "Interest in technical events"],
      deadline: "February 20, 2025"
    },
    {
      position: "Content Writer",
      department: "Media Team",
      description: "Create engaging content for newsletters, social media, and website. Ideal for students with strong writing skills.",
      requirements: ["Strong writing skills", "Creativity", "Basic knowledge of social media"],
      deadline: "February 25, 2025"
    },
    {
      position: "Event Volunteer",
      department: "Events Team",
      description: "Support various events and activities. Great opportunity to gain experience in event management.",
      requirements: ["Enthusiastic and reliable", "Good interpersonal skills", "Flexible schedule"],
      deadline: "March 1, 2025"
    }
  ];

  const eventGallery = [
    {
      title: "National Design Competition 2024",
      year: "2024",
      type: "Competition",
      image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3AlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc1NzY2NTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Industry Visit to Tata Motors",
      year: "2024",
      type: "Industrial Visit",
      image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBsZWFkZXJzaGlwJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzY2NTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "CAD/CAM Workshop",
      year: "2024",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc21lJTIwbWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nJTIwYXdhcmQlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NTc2NjUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-blue-100 text-blue-800";
      case "Competition": return "bg-red-100 text-red-800";
      case "Seminar": return "bg-green-100 text-green-800";
      case "Symposium": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Events & Activities</h1>
          <p className="text-xl text-gray-600">Stay updated with our latest events, competitions, and opportunities</p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
            <TabsTrigger value="gallery">Event Gallery</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      {event.registrationOpen && (
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          Registration Open
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-primary">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button 
                      className={`w-full ${event.registrationOpen ? 'bg-accent hover:bg-accent/90' : ''}`}
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recruitment" className="space-y-6">
            <div className="bg-accent/20 border border-accent rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team!</h2>
              <p className="text-gray-700">
                We're looking for enthusiastic students to join various teams within our ASME Student Section. 
                These positions offer great opportunities to develop leadership skills, gain experience, and make meaningful contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recruitmentOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">{opportunity.position}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {opportunity.department}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{opportunity.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Deadline:</span> {opportunity.deadline}
                      </p>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventGallery.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{event.type}</Badge>
                      <span className="text-sm text-gray-500">{event.year}</span>
                    </div>
                    <CardTitle className="text-primary">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">ASME Events Calendar</CardTitle>
                <CardDescription>
                  View all upcoming ASME events and important dates
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-muted rounded-lg p-12 mb-6">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 mb-4">Embedded Google Calendar will be displayed here</p>
                  <p className="text-sm text-gray-500">
                    The calendar includes all ASME section events, national ASME events, and important deadlines.
                  </p>
                </div>
                <Button>
                  Open Full Calendar
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}