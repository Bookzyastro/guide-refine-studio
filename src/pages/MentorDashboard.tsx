import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const MentorDashboard = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "15", color: "text-blue-400" },
    { icon: MessageSquare, label: "Pending Messages", value: "8", color: "text-green-400" },
    { icon: Calendar, label: "Sessions This Week", value: "6", color: "text-yellow-400" },
    { icon: TrendingUp, label: "Impact Score", value: "92", color: "text-purple-400" },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Mentor!</h1>
        
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
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">React Advanced Patterns</p>
                      <p className="text-sm text-muted-foreground mt-1">with Sarah Johnson</p>
                    </div>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Today</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">3:00 PM - 4:00 PM</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold mb-4">Recent Student Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <div>
                    <p className="font-medium">John Doe completed assignment</p>
                    <p className="text-sm text-muted-foreground">JavaScript Basics - Module 3</p>
                    <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
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
