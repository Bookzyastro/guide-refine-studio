import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, MapPin, Mail } from "lucide-react";

const Profile = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Your Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>

        <div className="glass-card p-8 rounded-2xl mb-6">
          <div className="flex items-start gap-6 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold">
                JD
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3 gradient-text">John Doe</h2>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>@johndoe</span>
                </div>
              </div>
              <Button variant="glass">
                <Github className="mr-2 w-4 h-4" />
                Connect GitHub
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="bio" className="text-base">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..." 
                className="mt-2 glass-card border-white/10 min-h-[100px]"
                defaultValue="Passionate developer learning full-stack development"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="skills" className="text-base">Skills</Label>
                <Input 
                  id="skills" 
                  placeholder="React, TypeScript, Node.js" 
                  className="mt-2 glass-card border-white/10"
                  defaultValue="React, JavaScript, HTML, CSS"
                />
              </div>
              <div>
                <Label htmlFor="interests" className="text-base">Interests</Label>
                <Input 
                  id="interests" 
                  placeholder="Web Development, AI, Cloud" 
                  className="mt-2 glass-card border-white/10"
                  defaultValue="Web Development, Mobile Apps"
                />
              </div>
            </div>

            <Button variant="gradient" className="mt-4">
              Save Changes
            </Button>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 gradient-text">Learning Progress</h3>
          <div className="space-y-6">
            {[
              { name: "React Fundamentals", progress: 30, color: "from-purple-500 to-blue-500" },
              { name: "TypeScript Basics", progress: 60, color: "from-blue-500 to-cyan-500" },
              { name: "Node.js Backend", progress: 90, color: "from-cyan-500 to-teal-500" },
            ].map((course) => (
              <div key={course.name}>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">{course.name}</span>
                  <span className="text-muted-foreground font-medium">{course.progress}%</span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-500 shadow-glow`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
