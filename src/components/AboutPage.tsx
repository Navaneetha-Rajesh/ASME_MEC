import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const foundingMembers = [
    "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"
  ];

  return (
    <div className="py-12 space-y-16">
      {/* About Our Student Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary">About Our Student Section</h1>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                The ASME Student Section at Govt. Model Engineering College was established on 
                <span className="font-semibold text-primary"> March 15, 2018</span>, marking a significant 
                milestone in fostering technical excellence and professional development among mechanical 
                engineering students.
              </p>
              <p>
                Our student section serves as a bridge between academic learning and industry practices, 
                providing students with opportunities to engage in cutting-edge research, participate in 
                national competitions, and develop leadership skills that will serve them throughout their careers.
              </p>
              <p>
                We are committed to promoting the art, science, and practice of multidisciplinary engineering 
                and allied sciences to the global community. Through workshops, seminars, technical talks, 
                and hands-on projects, we prepare our members for successful careers in mechanical engineering 
                and related fields.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="p-6 bg-white shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc21lJTIwbWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nJTIwYXdhcmQlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NTc2NjUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ASME Student Section Certificate"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="mb-2">Official Charter</Badge>
                <p className="text-sm text-gray-600">
                  ASME Student Section Charter Certificate
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Founding Members</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-gray-600 mb-8">
              We honor the vision and dedication of our founding members who established this student section:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {foundingMembers.map((member, index) => (
                <div key={index} className="text-center p-4 bg-muted rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {member.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-medium text-sm text-primary">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Goals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primary Goal */}
          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Primary Goal</CardTitle>
              </div>
              <CardDescription className="text-gray-200 text-base">
                To provide a platform for mechanical engineering students to enhance their technical knowledge, 
                develop professional skills, and connect with industry experts and peers globally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Foster technical excellence and innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Build strong industry connections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Develop leadership and teamwork skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Promote lifelong learning and professional growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Future Roadmap */}
          <Card className="bg-white border-2 border-accent">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-primary">Future Roadmap</CardTitle>
              </div>
              <CardDescription className="text-gray-600 text-base">
                Our vision for the next five years includes expanding our impact and creating more 
                opportunities for student growth and development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Establish research partnerships with international universities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Launch student-led innovation projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Create mentorship programs with alumni</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Host national-level technical symposiums</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Expand community outreach programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}