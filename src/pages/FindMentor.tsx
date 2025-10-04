import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star } from "lucide-react";

const FindMentor = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";

  const mentors = [
    {
      name: "Alex Rodriguez",
      title: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      rating: 4.9,
      students: 32,
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      bio: "10+ years of experience in web development. Passionate about teaching and helping developers grow.",
    },
    {
      name: "Jessica Lee",
      title: "Tech Lead & Architect",
      location: "New York, NY",
      rating: 5.0,
      students: 28,
      skills: ["TypeScript", "System Design", "Docker", "Kubernetes"],
      bio: "Specialized in scalable architectures and cloud-native applications.",
    },
    {
      name: "David Kumar",
      title: "Frontend Specialist",
      location: "Austin, TX",
      rating: 4.8,
      students: 45,
      skills: ["React", "Vue.js", "CSS", "Performance"],
      bio: "Helping developers master modern frontend technologies and best practices.",
    },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Find Your Mentor</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search mentors by skills, expertise, or name..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor, i) => (
            <Card key={i} className="p-6 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.title}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {mentor.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {mentor.rating}
                    </div>
                    <span className="text-muted-foreground">{mentor.students} students</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button className="w-full">
                Request Mentorship
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindMentor;
