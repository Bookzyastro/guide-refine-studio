import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Trophy, Star, Zap, Target, Crown } from "lucide-react";

const Rewards = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";

  const achievements = [
    { icon: Award, title: "First Session", description: "Completed your first mentoring session", earned: true, gradient: "from-purple-500 to-blue-500" },
    { icon: Trophy, title: "10 Sessions", description: "Completed 10 mentoring sessions", earned: true, gradient: "from-blue-500 to-cyan-500" },
    { icon: Star, title: "5-Star Rated", description: "Received a 5-star rating", earned: true, gradient: "from-cyan-500 to-teal-500" },
    { icon: Zap, title: "Quick Responder", description: "Responded within 5 minutes 10 times", earned: false, gradient: "from-yellow-500 to-orange-500" },
    { icon: Target, title: "Goal Setter", description: "Set and achieved 5 learning goals", earned: false, gradient: "from-pink-500 to-red-500" },
    { icon: Crown, title: "Expert", description: "Reached 100 total sessions", earned: false, gradient: "from-purple-500 to-pink-500" },
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Rodriguez", points: 2450, badge: "🥇" },
    { rank: 2, name: "Jessica Lee", points: 2180, badge: "🥈" },
    { rank: 3, name: "You", points: 1890, badge: "🥉" },
    { rank: 4, name: "David Kumar", points: 1750, badge: "" },
    { rank: 5, name: "Sarah Chen", points: 1620, badge: "" },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Rewards & Achievements</h1>
          <p className="text-muted-foreground">Track your progress and compete with others</p>
        </div>

        {/* Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Points", value: "1,890", icon: Trophy, gradient: "from-purple-500 to-blue-500" },
            { label: "Achievements", value: "12/24", icon: Award, gradient: "from-blue-500 to-cyan-500" },
            { label: "Rank", value: "#3", icon: Crown, gradient: "from-cyan-500 to-teal-500" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievements */}
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-6 gradient-text">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                    achievement.earned
                      ? "glass-strong hover:scale-[1.02]"
                      : "glass opacity-50 hover:opacity-70"
                  }`}
                >
                  <div className="relative group flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} blur-lg opacity-40 transition-opacity`}></div>
                    <div
                      className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${achievement.gradient}`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      {achievement.earned && (
                        <Badge variant="secondary" className="glass text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard & Progress */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 gradient-text-secondary">Leaderboard</h2>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                      user.name === "You"
                        ? "glass-strong hover:scale-[1.02]"
                        : "glass hover:glass-strong"
                    }`}
                  >
                    <div className="w-10 text-center font-bold text-xl">
                      {user.badge || `#${user.rank}`}
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${user.name === "You" ? "gradient-text" : ""}`}>
                        {user.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold gradient-text-secondary">{user.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 gradient-text">Level Progress</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Level 7</span>
                  <span className="text-muted-foreground">1,890 / 2,000 XP</span>
                </div>
                <div className="h-4 glass rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-500 shadow-glow"
                    style={{ width: "94.5%" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  110 XP until Level 8
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Rewards;
