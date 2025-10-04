import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const MentorDashboard = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "15", color: "from-purple-500 to-blue-500" },
    { icon: MessageSquare, label: "Pending Messages", value: "8", color: "from-blue-500 to-cyan-500" },
    { icon: Calendar, label: "Sessions This Week", value: "6", color: "from-cyan-500 to-teal-500" },
    { icon: TrendingUp, label: "Impact Score", value: "92", color: "from-pink-500 to-purple-500" },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Welcome back, Mentor!</h1>
          <p className="text-muted-foreground">Your mentoring impact this week</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 gradient-text">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[
                { title: "React Advanced Patterns", student: "Sarah Johnson", time: "Today, 3:00 PM - 4:00 PM", status: "Today" },
                { title: "TypeScript Best Practices", student: "Mike Chen", time: "Tomorrow, 2:00 PM - 3:00 PM", status: "Tomorrow" },
                { title: "System Design Review", student: "Emma Davis", time: "Friday, 4:00 PM - 5:00 PM", status: "Friday" },
              ].map((session, i) => (
                <div key={i} className="glass p-4 rounded-xl hover:glass-strong transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium mb-1">{session.title}</p>
                      <p className="text-sm text-muted-foreground">with {session.student}</p>
                    </div>
                    <span className="text-xs glass px-3 py-1 rounded-full gradient-text font-medium">{session.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{session.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 gradient-text-secondary">Recent Student Activity</h2>
            <div className="space-y-4">
              {[
                { student: "John Doe", action: "completed assignment", detail: "JavaScript Basics - Module 3", time: "1 hour ago" },
                { student: "Alice Wang", action: "submitted project", detail: "React Todo App", time: "3 hours ago" },
                { student: "Bob Martinez", action: "requested session", detail: "Help with API integration", time: "5 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-gradient-secondary mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">
                      <span className="gradient-text-secondary">{activity.student}</span> {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.detail}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
