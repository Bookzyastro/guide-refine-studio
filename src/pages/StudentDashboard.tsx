import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { BookOpen, MessageSquare, Award, TrendingUp } from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Learning Paths", value: "3", color: "from-purple-500 to-blue-500" },
    { icon: MessageSquare, label: "Active Chats", value: "5", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Achievements", value: "12", color: "from-cyan-500 to-teal-500" },
    { icon: TrendingUp, label: "Streak Days", value: "7", color: "from-pink-500 to-purple-500" },
  ];

  return (
    <DashboardLayout userType="student">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Here's your learning progress today</p>
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
            <h2 className="text-xl font-bold mb-4 gradient-text">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: "Completed lesson: React Hooks", time: "2 hours ago" },
                { title: "Started new path: TypeScript Fundamentals", time: "5 hours ago" },
                { title: "Achievement unlocked: Fast Learner", time: "1 day ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 gradient-text-secondary">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[
                { title: "JavaScript Advanced Concepts", mentor: "John Doe", time: "Tomorrow at 3:00 PM" },
                { title: "React Performance Optimization", mentor: "Sarah Smith", time: "Friday at 2:00 PM" },
              ].map((session, i) => (
                <div key={i} className="glass p-4 rounded-xl hover:glass-strong transition-all">
                  <p className="font-medium mb-1">{session.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{session.time}</p>
                  <p className="text-sm gradient-text-secondary font-medium">with {session.mentor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
