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
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      time: "5 hours ago",
      content: "Looking for mentees interested in learning backend development with Node.js and PostgreSQL. DM me if interested!",
      likes: 45,
      comments: 12,
    },
    {
      author: "Emma Davis",
      role: "Product Designer",
      time: "1 day ago",
      content: "Sharing my experience transitioning from frontend to full-stack. Here are 5 things I wish I knew earlier...",
      likes: 67,
      comments: 23,
    },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore Posts</h1>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search posts, topics, or users..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <Card key={i} className="p-6 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{post.author}</h3>
                    <span className="text-sm text-muted-foreground">• {post.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{post.time}</p>
                  <p className="mb-4">{post.content}</p>
                  
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExplorePosts;
