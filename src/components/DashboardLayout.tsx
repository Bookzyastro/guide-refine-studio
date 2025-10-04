import { ReactNode } from "react";
import {
  Home,
  User,
  Compass,
  Users,
  MessageSquare,
  Award,
  LogOut,
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
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold">
            {userType === "student" ? "Student" : "Mentor"} Portal
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    isActive && "bg-accent"
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
