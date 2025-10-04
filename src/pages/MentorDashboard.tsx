import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, GitPullRequest, Users, FolderGit2, DollarSign, Calendar, MessageSquare, User, Download } from "lucide-react";

const MentorDashboard = () => {
  const githubMetrics = [
    { icon: GitBranch, label: "Contributions", value: "1,234", color: "text-foreground" },
    { icon: GitPullRequest, label: "Pull Requests", value: "89", color: "text-foreground" },
    { icon: Users, label: "Mentees", value: "24", color: "text-foreground" },
    { icon: FolderGit2, label: "Repositories", value: "42", color: "text-foreground" },
  ];

  const upcomingMeetings = [
    { student: "Sarah Johnson", topic: "React Advanced Patterns", time: "Today, 3:00 PM" },
    { student: "Mike Chen", topic: "TypeScript Best Practices", time: "Tomorrow, 2:00 PM" },
    { student: "Emma Davis", topic: "System Design Review", time: "Friday, 4:00 PM" },
  ];

  const recentChats = [
    { name: "John Doe", message: "Thanks for the session!", time: "5m ago", unread: true },
    { name: "Alice Wang", message: "When can we schedule next?", time: "1h ago", unread: true },
    { name: "Bob Martinez", message: "I completed the assignment", time: "3h ago", unread: false },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="overflow-y-auto">
        {/* Top Section - CV Download */}
        <div className="border-b border-border bg-card/50 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Mentor Dashboard</h1>
              <p className="text-muted-foreground">Track your mentoring impact and contributions</p>
            </div>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download My Contribution CV
            </Button>
          </div>
        </div>

        <div className="p-8 max-w-7xl mx-auto">
          {/* Middle Section - GitHub Metrics */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">GitHub Profile Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {githubMetrics.map((metric) => (
                <Card key={metric.label} className="p-6 border border-border hover:bg-card/80 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
                      <p className="text-3xl font-bold">{metric.value}</p>
                    </div>
                    <metric.icon className={`w-10 h-10 ${metric.color}`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Lower Section - Interactive Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* My Earnings */}
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5" />
                <h3 className="text-xl font-bold">My Earnings</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="text-2xl font-bold">$2,450</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-foreground rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">75% of monthly goal</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Earned</p>
                    <p className="text-xl font-bold">$18,340</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg/Session</p>
                    <p className="text-xl font-bold">$85</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* My Bookings */}
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5" />
                <h3 className="text-xl font-bold">Upcoming Meetings</h3>
              </div>
              <div className="space-y-3">
                {upcomingMeetings.map((meeting, i) => (
                  <div key={i} className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-sm">{meeting.topic}</p>
                      <span className="text-xs bg-accent px-2 py-1 rounded">{meeting.time.split(',')[0]}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">with {meeting.student}</p>
                    <p className="text-xs text-muted-foreground mt-1">{meeting.time}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Sessions
              </Button>
            </Card>

            {/* Chats */}
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Recent Chats</h3>
                </div>
                <span className="bg-foreground text-background text-xs font-medium px-2 py-1 rounded-full">2</span>
              </div>
              <div className="space-y-3">
                {recentChats.map((chat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {chat.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-sm">{chat.name}</p>
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                    </div>
                    {chat.unread && (
                      <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Go to Chats
              </Button>
            </Card>

            {/* Full Info */}
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5" />
                <h3 className="text-xl font-bold">Mentee Overview</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Active Mentees</span>
                  <span className="text-xl font-bold">15</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Total Sessions</span>
                  <span className="text-xl font-bold">124</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Average Rating</span>
                  <span className="text-xl font-bold">4.9 ⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-xl font-bold">92%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">GitHub Integration</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                    <FolderGit2 className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">@johndoe</p>
                    <p className="text-xs text-muted-foreground">Connected</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
