"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  FileText,
  Award,
  Bell,
  ClipboardCheck,
  GraduationCap,
  BarChart3,
  QrCode,
} from "lucide-react";

const TeacherDashboard = () => {
  // Mock data
  const stats = {
    totalStudents: 187,
    totalCourses: 3,
    avgAttendance: 92.1,
  };

  const todaysClasses = [
    { course: "Advanced Mathematics", section: "Class 10-A", time: "09:00 AM", room: "301" },
    { course: "Calculus & Analytics", section: "Class 11-A", time: "02:00 PM", room: "302" },
  ];

  const pendingTasks = [
    { task: "Grade Assignment 3", count: 12, priority: "high" },
    { task: "Prepare Quiz", count: 1, priority: "medium" },
    { task: "Review Projects", count: 8, priority: "high" },
  ];

  const recentMessages = [
    { from: "Rahul Sharma", message: "Question about homework", time: "10m" },
    { from: "Priya Singh", message: "Absent today - medical", time: "1h" },
    { from: "Admin", message: "Faculty meeting at 4 PM", time: "2h" },
  ];

  const courseStats = [
    { code: "MATH301", name: "Advanced Mathematics", students: 87, avgGrade: 85.5 },
    { code: "MATH401", name: "Calculus & Analytics", students: 67, avgGrade: 88.2 },
    { code: "MATH501", name: "Linear Algebra", students: 33, avgGrade: 82.3 },
  ];

  const upcomingExams = [
    { course: "MATH301", exam: "Mid-Term Exam", date: "Nov 5" },
    { course: "MATH401", exam: "Unit Test 3", date: "Nov 8" },
  ];

  return (
    <div className="h-full bg-black overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              Teacher <span className="font-medium text-amber-200">Dashboard</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-0.5">Welcome back, Prof. Anderson</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-neutral-500">Total Students</p>
              <p className="text-xl font-semibold text-amber-200">{stats.totalStudents}</p>
            </div>
            <div className="h-10 w-px bg-neutral-800" />
            <div className="text-right">
              <p className="text-xs text-neutral-500">Avg Attendance</p>
              <p className="text-xl font-semibold text-amber-200">{stats.avgAttendance}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 2x3 Grid */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
          {/* Card 1: Today's Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <Calendar className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Today's Classes</h3>
              </div>
              <div className="flex-1 overflow-auto min-h-0">
                <div className="space-y-2">
                  {todaysClasses.map((cls, idx) => (
                    <div key={idx} className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-amber-200" />
                        <span className="text-xs font-semibold text-white">{cls.time}</span>
                      </div>
                      <p className="text-xs text-white font-medium truncate">{cls.course}</p>
                      <p className="text-xs text-neutral-500 truncate">{cls.section} • Room {cls.room}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Course Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <BookOpen className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">My Courses</h3>
              </div>
              <div className="flex-1 overflow-auto min-h-0">
                <div className="space-y-2">
                  {courseStats.map((course, idx) => (
                    <div key={idx} className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-amber-200">{course.code}</span>
                        <Badge className="bg-amber-200/20 text-amber-200 text-xs">{course.students}</Badge>
                      </div>
                      <p className="text-xs text-white font-medium truncate">{course.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-neutral-500">Avg</span>
                        <span className="text-xs font-semibold text-green-400">{course.avgGrade}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Pending Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <ClipboardCheck className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Pending Tasks</h3>
              </div>
              <div className="flex-1 overflow-auto min-h-0">
                <div className="space-y-2">
                  {pendingTasks.map((task, idx) => (
                    <div key={idx} className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-medium text-white truncate flex-1">{task.task}</p>
                        <Badge className={
                          task.priority === 'high' 
                            ? 'bg-red-500/20 text-red-400 text-xs' 
                            : 'bg-amber-500/20 text-amber-400 text-xs'
                        }>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3 text-amber-200" />
                        <span className="text-xs text-amber-200 font-semibold">{task.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Attendance Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <Users className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Attendance</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center min-h-0">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-neutral-800"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - stats.avgAttendance / 100)}`}
                      className="text-green-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-amber-200">{stats.avgAttendance}%</span>
                    <span className="text-xs text-neutral-500">Average</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 w-full">
                  <div className="text-center p-2 bg-neutral-900/50 rounded-lg">
                    <p className="text-xs text-neutral-500">Present</p>
                    <p className="text-sm font-semibold text-green-400">172</p>
                  </div>
                  <div className="text-center p-2 bg-neutral-900/50 rounded-lg">
                    <p className="text-xs text-neutral-500">Absent</p>
                    <p className="text-sm font-semibold text-red-400">15</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 5: Recent Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Recent Messages</h3>
              </div>
              <div className="flex-1 overflow-auto min-h-0">
                <div className="space-y-2">
                  {recentMessages.map((msg, idx) => (
                    <div key={idx} className="p-2 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-white truncate">{msg.from}</p>
                        <span className="text-xs text-neutral-500">{msg.time}</span>
                      </div>
                      <p className="text-xs text-neutral-400 truncate">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 6: Upcoming Exams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="row-span-1"
          >
            <Card className="p-4 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="p-1.5 bg-amber-200/10 rounded-lg">
                  <GraduationCap className="w-4 h-4 text-amber-200" />
                </div>
                <h3 className="text-sm font-medium text-white">Upcoming Exams</h3>
              </div>
              <div className="flex-1 overflow-auto min-h-0">
                <div className="space-y-2">
                  {upcomingExams.map((exam, idx) => (
                    <div key={idx} className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="flex items-center justify-between mb-1">
                        <Badge className="bg-amber-200/20 text-amber-200 text-xs">{exam.course}</Badge>
                        <span className="text-xs text-neutral-500">{exam.date}</span>
                      </div>
                      <p className="text-xs font-medium text-white mt-1">{exam.exam}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;