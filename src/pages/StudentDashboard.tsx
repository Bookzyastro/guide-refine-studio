import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { BookOpen, MessageSquare, Award, TrendingUp } from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Learning Paths", value: "3", color: "text-blue-400" },
    { icon: MessageSquare, label: "Active Chats", value: "5", color: "text-green-400" },
    { icon: Award, label: "Achievements", value: "12", color: "text-yellow-400" },
    { icon: TrendingUp, label: "Streak Days", value: "7", color: "text-purple-400" },
  ];

  return (
    <DashboardLayout userType="student">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Student!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Completed lesson: React Hooks</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-4 bg-muted rounded-lg">
                  <p className="font-medium">JavaScript Advanced Concepts</p>
                  <p className="text-sm text-muted-foreground mt-1">Tomorrow at 3:00 PM</p>
                  <p className="text-sm text-primary mt-1">with John Doe</p>
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
