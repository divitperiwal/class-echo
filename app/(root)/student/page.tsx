"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  QrCode,
  Calendar,
  GraduationCap,
  FileText,
  MessageSquare,
  BookOpen,
} from "lucide-react";

const StudentDashboard = () => {
  const [qrLink, setQrLink] = useState("");

  // Mock data
  const todaysClasses = [
    { subject: "Mathematics", time: "09:00 AM", teacher: "Dr. Sharma", room: "301" },
    { subject: "Physics", time: "11:00 AM", teacher: "Prof. Kumar", room: "205" },
  ];

  const grades = [
    { subject: "Mathematics", grade: "A", score: 92 },
    { subject: "Physics", grade: "A-", score: 88 },
    { subject: "English", grade: "B+", score: 85 },
  ];

  const upcomingExams = [
    { subject: "Mathematics", date: "Nov 5", type: "Unit Test" },
    { subject: "Physics", date: "Nov 8", type: "Mid-Term" },
  ];

  const messages = [
    { from: "Dr. Sharma", message: "Submit assignment by Friday", time: "2h" },
    { from: "Admin", message: "Fee payment reminder", time: "5h" },
    { from: "Prof. Kumar", message: "Extra class on Saturday", time: "1d" },
  ];

  const studyMaterials = [
    { title: "Calculus Chapter 5", subject: "Mathematics", type: "PDF" },
    { title: "Newton's Laws Notes", subject: "Physics", type: "PDF" },
    { title: "Chemistry Guide", subject: "Chemistry", type: "Video" },
  ];

  const handleQrSubmit = () => {
    if (qrLink.trim()) {
      alert(`Attendance marked for: ${qrLink}`);
      setQrLink("");
    }
  };

  return (
    <div className="h-full bg-black overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              Student <span className="font-medium text-amber-200">Dashboard</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-0.5">Welcome back, Divit Periwal</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-neutral-500">GPA</p>
              <p className="text-xl font-semibold text-amber-200">8.85</p>
            </div>
            <div className="h-10 w-px bg-neutral-800" />
            <div className="text-right">
              <p className="text-xs text-neutral-500">Attendance</p>
              <p className="text-xl font-semibold text-amber-200">94.5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 2x3 Grid */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Card 1: QR Attendance Scanner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <QrCode className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Mark Attendance</h3>
              </div>
              <div className="space-y-2 flex-1 flex flex-col justify-center">
                <Input
                  placeholder="Paste QR link..."
                  value={qrLink}
                  onChange={(e) => setQrLink(e.target.value)}
                  className="h-9 text-sm bg-black/40 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
                />
                <Button
                  onClick={handleQrSubmit}
                  className="w-full h-9 text-sm bg-amber-200 hover:bg-amber-300 text-black font-medium rounded-lg"
                >
                  Submit
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Today's Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <Calendar className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Today's Classes</h3>
              </div>
              <div className="space-y-2 flex-1">
                {todaysClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-black/40 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-medium text-sm">{cls.subject}</p>
                        <p className="text-neutral-500 text-xs">{cls.teacher}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-amber-200 text-xs font-medium">{cls.time}</p>
                        <p className="text-neutral-600 text-xs">Room {cls.room}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Recent Grades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <GraduationCap className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Recent Grades</h3>
              </div>
              <div className="space-y-2 flex-1">
                {grades.map((grade, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-2.5 bg-black/40 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors"
                  >
                    <div>
                      <p className="text-white font-medium text-sm">{grade.subject}</p>
                      <p className="text-neutral-500 text-xs">Score: {grade.score}%</p>
                    </div>
                    <div className="text-xl font-bold text-amber-200">{grade.grade}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Upcoming Exams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <FileText className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Upcoming Exams</h3>
              </div>
              <div className="space-y-2 flex-1">
                {upcomingExams.map((exam, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-black/40 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium text-sm">{exam.subject}</p>
                        <p className="text-neutral-500 text-xs">{exam.type}</p>
                      </div>
                      <p className="text-amber-200 text-xs">{exam.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Card 5: Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Messages</h3>
                <span className="ml-auto text-xs px-1.5 py-0.5 bg-amber-200/10 text-amber-200 rounded-full">
                  3
                </span>
              </div>
              <div className="space-y-2 flex-1">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-black/40 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-0.5">
                      <p className="text-white font-medium text-xs">{msg.from}</p>
                      <span className="text-neutral-600 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-neutral-500 text-xs">{msg.message}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Card 6: Study Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <BookOpen className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Study Materials</h3>
              </div>
              <div className="space-y-2 flex-1">
                {studyMaterials.map((material, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-black/40 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium text-xs">{material.title}</p>
                        <p className="text-neutral-500 text-xs">{material.subject}</p>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 bg-amber-200/10 text-amber-200 rounded">
                        {material.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;