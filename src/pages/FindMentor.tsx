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
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "Jessica Lee",
      title: "Tech Lead & Architect",
      location: "New York, NY",
      rating: 5.0,
      students: 28,
      skills: ["TypeScript", "System Design", "Docker", "Kubernetes"],
      bio: "Specialized in scalable architectures and cloud-native applications.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "David Kumar",
      title: "Frontend Specialist",
      location: "Austin, TX",
      rating: 4.8,
      students: 45,
      skills: ["React", "Vue.js", "CSS", "Performance"],
      bio: "Helping developers master modern frontend technologies and best practices.",
      gradient: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Find Your Mentor</h1>
          <p className="text-muted-foreground">Connect with experienced developers</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search mentors by skills, expertise, or name..." 
              className="pl-12 glass-card border-white/10 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${mentor.gradient} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${mentor.gradient} flex items-center justify-center text-white text-xl font-bold`}>
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg gradient-text">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{mentor.title}</p>
                  <div className="flex items-center gap-4 text-sm flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {mentor.location}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      {mentor.rating}
                    </div>
                    <span className="text-muted-foreground">{mentor.students} students</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button variant="gradient" className="w-full">
                Request Mentorship
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindMentor;
