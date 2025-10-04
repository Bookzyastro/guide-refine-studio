import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageSquare, Share2, Search } from "lucide-react";

const ExplorePosts = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";

  const posts = [
    {
      author: "Sarah Johnson",
      role: "Senior Developer",
      time: "2 hours ago",
      content: "Just published a new article on React Server Components! Check it out and let me know what you think. #React #WebDev",
      likes: 24,
      comments: 5,
      gradient: "from-purple-500 to-blue-500",
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      time: "5 hours ago",
      content: "Looking for mentees interested in learning backend development with Node.js and PostgreSQL. DM me if interested!",
      likes: 45,
      comments: 12,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      author: "Emma Davis",
      role: "Product Designer",
      time: "1 day ago",
      content: "Sharing my experience transitioning from frontend to full-stack. Here are 5 things I wish I knew earlier...",
      likes: 67,
      comments: 23,
      gradient: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Explore Posts</h1>
          <p className="text-muted-foreground">Discover insights from the community</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search posts, topics, or users..." 
              className="pl-12 glass-card border-white/10 h-12"
            />
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="relative group flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${post.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold gradient-text">{post.author}</h3>
                    <span className="text-sm text-muted-foreground">• {post.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{post.time}</p>
                  <p className="mb-4 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-pink-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-blue-400 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExplorePosts;
