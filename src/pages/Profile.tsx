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
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

        <Card className="p-8 border border-border mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center text-3xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
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
              <Button variant="outline" className="mt-4">
                <Github className="mr-2 w-4 h-4" />
                Connect GitHub
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..." 
                className="mt-2"
                defaultValue="Passionate developer learning full-stack development"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input 
                  id="skills" 
                  placeholder="React, TypeScript, Node.js" 
                  className="mt-2"
                  defaultValue="React, JavaScript, HTML, CSS"
                />
              </div>
              <div>
                <Label htmlFor="interests">Interests</Label>
                <Input 
                  id="interests" 
                  placeholder="Web Development, AI, Cloud" 
                  className="mt-2"
                  defaultValue="Web Development, Mobile Apps"
                />
              </div>
            </div>

            <Button className="mt-4">
              Save Changes
            </Button>
          </div>
        </Card>

        <Card className="p-6 border border-border">
          <h3 className="text-xl font-bold mb-4">Learning Progress</h3>
          <div className="space-y-4">
            {[
              { name: "React Fundamentals", progress: 30 },
              { name: "TypeScript Basics", progress: 60 },
              { name: "Node.js Backend", progress: 90 },
            ].map((course) => (
              <div key={course.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{course.name}</span>
                  <span className="text-muted-foreground">{course.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-foreground rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
