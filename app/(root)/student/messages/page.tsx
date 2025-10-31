"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  Send,
  Bell,
  User,
  Pin,
  Clock,
  Search,
} from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  role: string;
  subject?: string;
  avatar: string;
  status: "online" | "offline";
  unreadCount: number;
  lastMessage?: string;
  lastMessageTime?: string;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Announcement {
  id: string;
  teacherName: string;
  teacherRole: string;
  title: string;
  content: string;
  timestamp: string;
  isPinned: boolean;
}

const StudentsMessages = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - Teachers
  const teachers: Teacher[] = [
    {
      id: "1",
      name: "Dr. Rajesh Sharma",
      role: "Faculty Advisor",
      avatar: "RS",
      status: "online",
      unreadCount: 2,
      lastMessage: "Please submit your project report by Friday",
      lastMessageTime: "2h ago",
    },
    {
      id: "2",
      name: "Prof. Priya Kumar",
      role: "Subject Teacher",
      subject: "Mathematics",
      avatar: "PK",
      status: "online",
      unreadCount: 0,
      lastMessage: "Good work on the last assignment!",
      lastMessageTime: "5h ago",
    },
    {
      id: "3",
      name: "Dr. Amit Patel",
      role: "HOD",
      subject: "Computer Science",
      avatar: "AP",
      status: "offline",
      unreadCount: 1,
      lastMessage: "Meeting scheduled for next week",
      lastMessageTime: "1d ago",
    },
    {
      id: "4",
      name: "Dr. Kavita Reddy",
      role: "Subject Teacher",
      subject: "Physics",
      avatar: "KR",
      status: "online",
      unreadCount: 0,
      lastMessage: "Lab report looks good",
      lastMessageTime: "2d ago",
    },
    {
      id: "5",
      name: "Prof. Suresh Mehta",
      role: "Subject Teacher",
      subject: "Chemistry",
      avatar: "SM",
      status: "offline",
      unreadCount: 0,
      lastMessage: "Check the reference materials I shared",
      lastMessageTime: "3d ago",
    },
    {
      id: "6",
      name: "Dr. Ananya Singh",
      role: "Subject Teacher",
      subject: "English",
      avatar: "AS",
      status: "online",
      unreadCount: 3,
      lastMessage: "Your essay needs revision",
      lastMessageTime: "4h ago",
    },
  ];

  // Mock data - Announcements
  const announcements: Announcement[] = [
    {
      id: "1",
      teacherName: "Dr. Amit Patel",
      teacherRole: "HOD - Computer Science",
      title: "Mid-Term Examination Schedule",
      content:
        "Mid-term examinations will be conducted from November 15-20, 2025. Please prepare accordingly and check your individual timetables on the portal.",
      timestamp: "2 hours ago",
      isPinned: true,
    },
    {
      id: "2",
      teacherName: "Principal's Office",
      teacherRole: "Administration",
      title: "School Annual Day - December 15",
      content:
        "Our annual day celebration will be held on December 15, 2025. All students are requested to participate. Cultural event registrations are now open.",
      timestamp: "5 hours ago",
      isPinned: true,
    },
    {
      id: "3",
      teacherName: "Prof. Priya Kumar",
      teacherRole: "Mathematics Department",
      title: "Math Olympiad Registration",
      content:
        "Students interested in participating in the Inter-school Math Olympiad can register with me by November 5th. Practice sessions will start from next week.",
      timestamp: "1 day ago",
      isPinned: false,
    },
    {
      id: "4",
      teacherName: "Dr. Rajesh Sharma",
      teacherRole: "Student Affairs",
      title: "Career Guidance Workshop",
      content:
        "A career guidance workshop will be conducted on November 8th. Industry experts will be present to guide students about various career paths.",
      timestamp: "2 days ago",
      isPinned: false,
    },
    {
      id: "5",
      teacherName: "Sports Department",
      teacherRole: "Physical Education",
      title: "Inter-Class Sports Tournament",
      content:
        "Registration for inter-class sports tournament is now open. Events include cricket, football, basketball, and athletics. Last date: November 10th.",
      timestamp: "3 days ago",
      isPinned: false,
    },
  ];

  // Mock messages for selected teacher
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: "1",
      senderName: "Dr. Rajesh Sharma",
      content: "Hello Divit, how are you doing with your project?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      senderName: "You",
      content: "Hi sir, I'm making good progress. Almost done with the research phase.",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "1",
      senderName: "Dr. Rajesh Sharma",
      content: "That's great! Please submit your project report by Friday.",
      timestamp: "10:40 AM",
      isOwn: false,
    },
    {
      id: "4",
      senderId: "me",
      senderName: "You",
      content: "Sure sir, I'll submit it by Friday. Thank you!",
      timestamp: "10:42 AM",
      isOwn: true,
    },
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedTeacher) {
      const newMessage: Message = {
        id: Date.now().toString(),
        senderId: "me",
        senderName: "You",
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (teacher.subject && teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <MessageSquare className="inline-block w-6 h-6 mr-2 text-amber-200" />
              Messages & <span className="font-medium text-amber-200">Announcements</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              Chat with teachers and view announcements
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden gap-6 p-6">
        {/* Left Column - Announcements */}
        <div className="w-[420px] flex flex-col">
          {/* Announcements Section */}
          <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden">
            <div className="px-5 py-4 border-b border-neutral-800/50">
              <h3 className="text-base font-medium text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-200" />
                Announcements
              </h3>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-5 space-y-4">
                {announcements.map((announcement, idx) => (
                  <motion.div
                    key={announcement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      className={`p-5 ${
                        announcement.isPinned
                          ? "bg-amber-200/5 border-amber-200/30"
                          : "bg-black/40 border-neutral-800/50"
                      } hover:border-amber-200/50 transition-all`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            {announcement.isPinned && (
                              <Pin className="w-3.5 h-3.5 text-amber-200" />
                            )}
                            <h4 className="text-sm font-semibold text-white">
                              {announcement.title}
                            </h4>
                          </div>
                          <p className="text-xs text-neutral-500 mb-2.5">
                            {announcement.teacherName} • {announcement.teacherRole}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                        {announcement.content}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                        <Clock className="w-3.5 h-3.5" />
                        {announcement.timestamp}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Middle Column - Teachers List */}
        <div className="w-[360px] flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <Input
              placeholder="Search teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 text-sm bg-neutral-950/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
            />
          </div>

          {/* Teachers List */}
          <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-5 space-y-3">
                {filteredTeachers.map((teacher, idx) => (
                  <motion.div
                    key={teacher.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      onClick={() => setSelectedTeacher(teacher)}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedTeacher?.id === teacher.id
                          ? "bg-amber-200/10 border-amber-200/50 shadow-lg shadow-amber-200/10"
                          : "bg-black/40 border-neutral-800/50 hover:border-amber-200/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <div className="w-11 h-11 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                            <span className="text-amber-200 font-semibold text-sm">
                              {teacher.avatar}
                            </span>
                          </div>
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-black ${
                              teacher.status === "online" ? "bg-green-400" : "bg-neutral-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-white font-medium text-sm truncate">
                              {teacher.name}
                            </p>
                            {teacher.unreadCount > 0 && (
                              <Badge className="bg-amber-200 text-black text-xs h-5 min-w-5 flex items-center justify-center px-1.5">
                                {teacher.unreadCount}
                              </Badge>
                            )}
                          </div>
                          <p className="text-neutral-500 text-xs mb-1.5">
                            {teacher.role}
                            {teacher.subject && ` • ${teacher.subject}`}
                          </p>
                          {teacher.lastMessage && (
                            <p className="text-neutral-600 text-xs truncate leading-relaxed">
                              {teacher.lastMessage}
                            </p>
                          )}
                        </div>
                      </div>
                      {teacher.lastMessageTime && (
                        <p className="text-neutral-700 text-xs mt-2.5">{teacher.lastMessageTime}</p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Right Column - Chat Area */}
        <div className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {selectedTeacher ? (
              <motion.div
                key={selectedTeacher.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden">
                  {/* Chat Header */}
                  <div className="px-6 py-5 border-b border-neutral-800/50">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-amber-200/20 flex items-center justify-center">
                          <span className="text-amber-200 font-semibold text-lg">
                            {selectedTeacher.avatar}
                          </span>
                        </div>
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-950 ${
                            selectedTeacher.status === "online"
                              ? "bg-green-400"
                              : "bg-neutral-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">{selectedTeacher.name}</h3>
                        <p className="text-neutral-500 text-sm">
                          {selectedTeacher.role}
                          {selectedTeacher.subject && ` • ${selectedTeacher.subject}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <ScrollArea className="flex-1">
                    <div className="p-6 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] ${
                              message.isOwn
                                ? "bg-amber-200 text-black"
                                : "bg-neutral-900 text-white"
                            } rounded-2xl px-4 py-3`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.isOwn ? "text-black/60" : "text-neutral-500"
                              }`}
                            >
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="px-6 py-5 border-t border-neutral-800/50">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Type your message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1 h-11 bg-black/40 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="h-11 px-5 bg-amber-200 hover:bg-amber-300 text-black font-medium rounded-lg transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex items-center justify-center"
              >
                <Card className="p-16 bg-neutral-950/50 border-neutral-800/50 text-center">
                  <User className="w-20 h-20 text-neutral-700 mx-auto mb-6" />
                  <p className="text-neutral-400 text-lg mb-2 font-medium">Select a teacher to start chatting</p>
                  <p className="text-neutral-600 text-sm">
                    Choose from the list to view your conversation
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StudentsMessages;