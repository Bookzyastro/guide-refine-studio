import { useLocation } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Chats = () => {
  const location = useLocation();
  const userType = location.pathname.includes("student") ? "student" : "mentor";
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      name: "Sarah Johnson",
      lastMessage: "Thanks for the session today!",
      time: "2m ago",
      unread: 2,
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "Mike Chen",
      lastMessage: "Could we reschedule tomorrow's meeting?",
      time: "1h ago",
      unread: 0,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emma Davis",
      lastMessage: "I've completed the assignment",
      time: "3h ago",
      unread: 1,
      gradient: "from-cyan-500 to-teal-500",
    },
  ];

  const messages = [
    { sender: "them", text: "Hi! Thanks for accepting my mentorship request", time: "10:30 AM" },
    { sender: "me", text: "You're welcome! Happy to help you learn", time: "10:32 AM" },
    { sender: "them", text: "I have a question about React hooks", time: "10:33 AM" },
    { sender: "me", text: "Sure, what would you like to know?", time: "10:35 AM" },
    { sender: "them", text: "When should I use useEffect vs useLayoutEffect?", time: "10:36 AM" },
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="h-[calc(100vh-2rem)] p-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold gradient-text mb-2">Messages</h1>
          <p className="text-muted-foreground">Stay connected with your mentors and students</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 h-[calc(100%-7rem)]">
          {/* Conversations List */}
          <div className="glass-card p-4 rounded-2xl overflow-hidden flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search chats..." className="pl-9 glass border-white/10" />
              </div>
            </div>
            
            <div className="space-y-2 overflow-y-auto flex-1">
              {conversations.map((conv, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedChat(i)}
                  className={cn(
                    "p-3 rounded-xl cursor-pointer transition-all duration-300",
                    selectedChat === i ? "glass-strong" : "hover:glass"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative group flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-r ${conv.gradient} blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                      <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-r ${conv.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                        {conv.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="flex-shrink-0 bg-gradient-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-glow">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-2 glass-card rounded-2xl flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${conversations[selectedChat].gradient} blur-lg opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${conversations[selectedChat].gradient} flex items-center justify-center text-white font-bold`}>
                  {conversations[selectedChat].name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg gradient-text">{conversations[selectedChat].name}</h2>
                <p className="text-sm text-muted-foreground">Active now</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl p-4",
                      msg.sender === "me"
                        ? "glass-strong ml-auto"
                        : "glass"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input placeholder="Type a message..." className="glass border-white/10" />
                <Button variant="gradient" size="icon" className="flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chats;
