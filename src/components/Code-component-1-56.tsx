import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

export function ContactPage() {
  const contactInfo = [
    {
      department: "General Inquiries",
      email: "asme@mec.ac.in",
      description: "For general information about ASME Student Section"
    },
    {
      department: "Membership",
      email: "membership.asme@mec.ac.in",
      description: "Questions about ASME membership and benefits"
    },
    {
      department: "Events & Workshops",
      email: "events.asme@mec.ac.in",
      description: "Event registrations and workshop inquiries"
    },
    {
      department: "Technical Support",
      email: "technical.asme@mec.ac.in",
      description: "Technical project guidance and research support"
    },
    {
      department: "Media & Publications",
      email: "media.asme@mec.ac.in",
      description: "Newsletter submissions and media queries"
    },
    {
      department: "Student Leadership",
      email: "chair.asme@mec.ac.in",
      description: "Leadership opportunities and student initiatives"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "#",
      username: "@ASMEMECKochi",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      platform: "Instagram",
      url: "#",
      username: "@asme_mec",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      platform: "YouTube",
      url: "#",
      username: "ASME MEC Kochi",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      platform: "Twitter",
      url: "#",
      username: "@ASME_MEC",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  const helpfulLinks = [
    {
      title: "ASME Official Website",
      url: "https://asme.org",
      description: "Main ASME website with global resources and information"
    },
    {
      title: "MEC Official Website",
      url: "#",
      description: "Govt. Model Engineering College official website"
    },
    {
      title: "Mechanical Engineering Department",
      url: "#",
      description: "Department of Mechanical Engineering, MEC"
    },
    {
      title: "ASME Student Portal",
      url: "https://asme.org/students",
      description: "Dedicated portal for ASME student members"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any questions, suggestions, or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to the appropriate department for faster assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary">{contact.department}</h4>
                      <Badge variant="outline" className="text-xs">
                        Email
                      </Badge>
                    </div>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-secondary hover:text-accent transition-colors font-medium"
                    >
                      {contact.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Our Location</CardTitle>
                <CardDescription>
                  Visit us at our campus location
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Govt. Model Engineering College</h4>
                  <div className="text-gray-600">
                    <p>Thrikkakara, Kochi</p>
                    <p>Kerala, India - 682021</p>
                    <p className="mt-2">
                      <span className="font-medium">Phone:</span> +91-484-2575384
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Interactive Map</p>
                    <p className="text-sm">Click to view in Google Maps</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-primary">Connect With Us</CardTitle>
              <CardDescription>
                Follow us on social media for updates, events, and engineering insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-muted rounded-lg hover:bg-accent/20 hover:text-accent transition-colors group"
                  >
                    <div className="mb-3 text-gray-600 group-hover:text-accent transition-colors">
                      {social.icon}
                    </div>
                    <h4 className="font-semibold text-primary mb-1">{social.platform}</h4>
                    <p className="text-sm text-gray-600 text-center">{social.username}</p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Helpful Links */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-primary">Helpful Links</CardTitle>
              <CardDescription>
                Quick access to important websites and resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {helpfulLinks.map((link, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{link.title}</h4>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Student Leadership Team</h4>
                  <p className="text-gray-200">Monday - Friday</p>
                  <p className="text-gray-200">2:00 PM - 5:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Faculty Advisor</h4>
                  <p className="text-gray-200">Tuesday & Thursday</p>
                  <p className="text-gray-200">10:00 AM - 12:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <p className="text-gray-200">Monday - Saturday</p>
                  <p className="text-gray-200">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-200">
                  For urgent matters outside office hours, please email us and we'll respond within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}