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
    { icon: Award, title: "First Session", description: "Completed your first mentoring session", earned: true },
    { icon: Trophy, title: "10 Sessions", description: "Completed 10 mentoring sessions", earned: true },
    { icon: Star, title: "5-Star Rated", description: "Received a 5-star rating", earned: true },
    { icon: Zap, title: "Quick Responder", description: "Responded within 5 minutes 10 times", earned: false },
    { icon: Target, title: "Goal Setter", description: "Set and achieved 5 learning goals", earned: false },
    { icon: Crown, title: "Expert", description: "Reached 100 total sessions", earned: false },
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
        <h1 className="text-3xl font-bold mb-8">Rewards & Achievements</h1>

        {/* Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Points</p>
                <p className="text-3xl font-bold mt-1">1,890</p>
              </div>
              <Trophy className="w-12 h-12" />
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Achievements</p>
                <p className="text-3xl font-bold mt-1">12/24</p>
              </div>
              <Award className="w-12 h-12" />
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Rank</p>
                <p className="text-3xl font-bold mt-1">#3</p>
              </div>
              <Crown className="w-12 h-12" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievements */}
          <Card className="p-6 border border-border">
            <h2 className="text-xl font-bold mb-4">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                    achievement.earned
                      ? "bg-muted"
                      : "bg-muted/50 opacity-50"
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      {achievement.earned && (
                        <Badge variant="secondary">
                          Earned
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-3 rounded-lg ${
                      user.name === "You"
                        ? "bg-muted"
                        : "bg-muted/50"
                    }`}
                  >
                    <div className="w-8 text-center font-bold">
                      {user.badge || `#${user.rank}`}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{user.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-xl font-bold mb-4">Level Progress</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Level 7</span>
                  <span className="text-muted-foreground">1,890 / 2,000 XP</span>
                </div>
                <Progress value={94.5} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  110 XP until Level 8
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Rewards;
