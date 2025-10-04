import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Github, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-60 animate-pulse"></div>
              <div className="relative glass-card p-4 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-6xl font-bold gradient-text">
              MentorHub
            </h1>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect, Learn, and Grow with <span className="gradient-text-secondary font-semibold">GitHub-powered</span> mentorship
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16 animate-slide-up">
          {/* Student Card */}
          <div className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-[1.02] group">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground">I'm a Student</h2>
              <p className="text-muted-foreground leading-relaxed">
                Explore posts, find mentors, and grow your skills with guidance from experienced developers
              </p>
              <div className="space-y-3">
                <Link to="/student-dashboard" className="block">
                  <Button variant="gradient" className="w-full" size="lg">
                    Enter Student Dashboard
                  </Button>
                </Link>
                <Button variant="glass" className="w-full" size="lg">
                  <Github className="mr-2" />
                  Continue with GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Mentor Card */}
          <div className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-[1.02] group">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-secondary blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-glow-secondary">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground">I'm a Mentor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Share your expertise, track contributions, manage bookings, and help shape the next generation
              </p>
              <div className="space-y-3">
                <Link to="/mentor-dashboard" className="block">
                  <Button variant="secondary" className="w-full" size="lg">
                    Enter Mentor Dashboard
                  </Button>
                </Link>
                <Button variant="glass" className="w-full" size="lg">
                  <Github className="mr-2" />
                  Continue with GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Github, title: "GitHub Integration", desc: "Seamless login and profile sync", delay: "0.1s", gradient: "from-purple-500 to-blue-500" },
            { icon: Users, title: "Community Driven", desc: "Connect with peers and experts", delay: "0.2s", gradient: "from-blue-500 to-cyan-500" },
            { icon: GraduationCap, title: "Structured Learning", desc: "Track progress and milestones", delay: "0.3s", gradient: "from-cyan-500 to-teal-500" },
          ].map((feature, i) => (
            <div 
              key={i}
              className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: feature.delay }}
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
