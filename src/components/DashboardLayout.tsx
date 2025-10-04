import { ReactNode } from "react";
import {
  Home,
  User,
  Compass,
  Users,
  MessageSquare,
  Award,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "student" | "mentor";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const location = useLocation();
  const basePath = `/${userType}-dashboard`;

  const navItems = [
    { icon: Home, label: "Dashboard", path: basePath },
    { icon: User, label: "Profile", path: `${basePath}/profile` },
    { icon: Compass, label: "Explore Posts", path: `${basePath}/explore` },
    { icon: Users, label: "Find Mentor", path: `${basePath}/find-mentor` },
    { icon: MessageSquare, label: "Chats", path: `${basePath}/chats` },
    { icon: Award, label: "Rewards", path: `${basePath}/rewards` },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with glassmorphism */}
      <aside className="w-72 glass-card border-r border-white/10 flex flex-col relative">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-60"></div>
              <div className="relative w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold gradient-text">
                {userType === "student" ? "Student" : "Mentor"} Portal
              </h2>
              <p className="text-xs text-muted-foreground">Welcome back!</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start group relative overflow-hidden",
                    isActive && "glass-card text-primary"
                  )}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                  )}
                  <Icon className={cn(
                    "w-4 h-4 mr-3 relative z-10",
                    isActive && "text-primary"
                  )} />
                  <span className="relative z-10">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
