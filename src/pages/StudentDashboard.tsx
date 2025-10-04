import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { BookOpen, MessageSquare, Award, TrendingUp } from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Learning Paths", value: "3" },
    { icon: MessageSquare, label: "Active Chats", value: "5" },
    { icon: Award, label: "Achievements", value: "12" },
    { icon: TrendingUp, label: "Streak Days", value: "7" },
  ];

  return (
    <DashboardLayout userType="student">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back, Student!</h1>
        
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
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: "Completed lesson: React Hooks", time: "2 hours ago" },
                { title: "Started new path: TypeScript Fundamentals", time: "5 hours ago" },
                { title: "Achievement unlocked: Fast Learner", time: "1 day ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2"></div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[
                { title: "JavaScript Advanced Concepts", mentor: "John Doe", time: "Tomorrow at 3:00 PM" },
                { title: "React Performance Optimization", mentor: "Sarah Smith", time: "Friday at 2:00 PM" },
              ].map((session, i) => (
                <div key={i} className="p-4 bg-muted rounded-lg">
                  <p className="font-medium">{session.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{session.time}</p>
                  <p className="text-sm mt-1">with {session.mentor}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
