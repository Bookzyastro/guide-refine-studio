import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, User } from "lucide-react";

const Sessions = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";

  const sessions = [
    {
      id: 1,
      title: "React Advanced Patterns",
      participant: userType === "mentor" ? "Sarah Johnson" : "John Doe (Mentor)",
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      status: "upcoming",
      topic: "React Hooks & Context API",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      participant: userType === "mentor" ? "Mike Chen" : "Jane Smith (Mentor)",
      date: "Tomorrow",
      time: "2:00 PM - 3:00 PM",
      status: "upcoming",
      topic: "Generics & Type Guards",
    },
    {
      id: 3,
      title: "System Design Review",
      participant: userType === "mentor" ? "Emma Davis" : "Alex Kumar (Mentor)",
      date: "Friday",
      time: "4:00 PM - 5:00 PM",
      status: "upcoming",
      topic: "Scalable Architecture",
    },
    {
      id: 4,
      title: "JavaScript Fundamentals",
      participant: userType === "mentor" ? "John Martinez" : "Sarah Lee (Mentor)",
      date: "Last Monday",
      time: "1:00 PM - 2:00 PM",
      status: "completed",
      topic: "Async/Await & Promises",
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      participant: userType === "mentor" ? "Lisa Wang" : "David Kim (Mentor)",
      date: "Last Week",
      time: "5:00 PM - 6:00 PM",
      status: "completed",
      topic: "REST API Design",
    },
  ];

  const upcomingSessions = sessions.filter(s => s.status === "upcoming");
  const completedSessions = sessions.filter(s => s.status === "completed");

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Sessions</h1>
          <p className="text-muted-foreground">
            {userType === "mentor" 
              ? "Manage your upcoming and past mentoring sessions" 
              : "View your scheduled and completed learning sessions"}
          </p>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingSessions.map((session) => (
              <Card key={session.id} className="p-6 border border-border hover:bg-card/80 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{session.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{session.topic}</p>
                  </div>
                  <Badge variant="secondary" className="bg-muted">
                    {session.date}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{session.participant}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{session.time}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Video className="w-4 h-4" />
                    Join Session
                  </Button>
                  <Button variant="outline">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Sessions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Past Sessions</h2>
          <div className="space-y-4">
            {completedSessions.map((session) => (
              <Card key={session.id} className="p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{session.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{session.participant}</span>
                        <span>•</span>
                        <span>{session.date}</span>
                        <span>•</span>
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Sessions;
