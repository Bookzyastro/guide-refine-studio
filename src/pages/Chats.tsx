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
    },
    {
      name: "Mike Chen",
      lastMessage: "Could we reschedule tomorrow's meeting?",
      time: "1h ago",
      unread: 0,
    },
    {
      name: "Emma Davis",
      lastMessage: "I've completed the assignment",
      time: "3h ago",
      unread: 1,
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
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-3 gap-4 h-[calc(100%-5rem)]">
          {/* Conversations List */}
          <Card className="p-4 shadow-card overflow-hidden flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search chats..." className="pl-9" />
              </div>
            </div>
            
            <div className="space-y-2 overflow-y-auto flex-1">
              {conversations.map((conv, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedChat(i)}
                  className={cn(
                    "p-3 rounded-lg cursor-pointer transition-colors",
                    selectedChat === i ? "bg-primary/10" : "hover:bg-muted"
                  )}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm">{conv.name}</h3>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Window */}
          <Card className="col-span-2 shadow-card flex flex-col">
            <div className="p-4 border-b border-border">
              <h2 className="font-bold text-lg">{conversations[selectedChat].name}</h2>
              <p className="text-sm text-muted-foreground">Active now</p>
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
                      "max-w-[70%] rounded-lg p-3",
                      msg.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input placeholder="Type a message..." />
                <Button variant="hero" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chats;
