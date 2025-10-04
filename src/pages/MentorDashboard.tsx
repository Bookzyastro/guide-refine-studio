import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const MentorDashboard = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "15" },
    { icon: MessageSquare, label: "Pending Messages", value: "8" },
    { icon: Calendar, label: "Sessions This Week", value: "6" },
    { icon: TrendingUp, label: "Impact Score", value: "92" },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back, Mentor!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[
                { title: "React Advanced Patterns", student: "Sarah Johnson", time: "Today, 3:00 PM - 4:00 PM", status: "Today" },
                { title: "TypeScript Best Practices", student: "Mike Chen", time: "Tomorrow, 2:00 PM - 3:00 PM", status: "Tomorrow" },
                { title: "System Design Review", student: "Emma Davis", time: "Friday, 4:00 PM - 5:00 PM", status: "Friday" },
              ].map((session, i) => (
                <div key={i} className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{session.title}</p>
                      <p className="text-sm text-muted-foreground">with {session.student}</p>
                    </div>
                    <span className="text-xs bg-accent px-2 py-1 rounded">{session.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{session.time}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Recent Student Activity</h2>
            <div className="space-y-4">
              {[
                { student: "John Doe", action: "completed assignment", detail: "JavaScript Basics - Module 3", time: "1 hour ago" },
                { student: "Alice Wang", action: "submitted project", detail: "React Todo App", time: "3 hours ago" },
                { student: "Bob Martinez", action: "requested session", detail: "Help with API integration", time: "5 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                  <div>
                    <p className="font-medium">{activity.student} {activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.detail}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
