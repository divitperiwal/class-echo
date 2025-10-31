"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  User,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  FileText,
  Video,
  CheckCircle2,
  Circle,
  Mail,
  MapPin,
  GraduationCap,
  BarChart3,
  Target,
} from "lucide-react";

interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  teacher: {
    name: string;
    email: string;
    office: string;
    avatar: string;
  };
  schedule: {
    days: string[];
    time: string;
    room: string;
  };
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
  grade: {
    current: string;
    percentage: number;
  };
  attendance: {
    present: number;
    total: number;
    percentage: number;
  };
  nextClass: string;
  assignments: {
    pending: number;
    upcoming: number;
  };
  syllabus: {
    completed: string[];
    upcoming: string[];
  };
  resources: {
    lectures: number;
    notes: number;
    assignments: number;
  };
  performance: {
    quizzes: number;
    midterm: number;
    assignments: number;
  };
}

const StudentsCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Mock data - Courses
  const courses: Course[] = [
    {
      id: "1",
      code: "MATH301",
      name: "Advanced Mathematics",
      credits: 4,
      teacher: {
        name: "Prof. Priya Kumar",
        email: "priya.kumar@srm.edu",
        office: "Block A, Room 305",
        avatar: "PK",
      },
      schedule: {
        days: ["Mon", "Wed", "Fri"],
        time: "09:00 AM - 10:30 AM",
        room: "Room 201",
      },
      progress: {
        completed: 28,
        total: 45,
        percentage: 62,
      },
      grade: {
        current: "A",
        percentage: 89,
      },
      attendance: {
        present: 43,
        total: 45,
        percentage: 95.6,
      },
      nextClass: "Tomorrow, 09:00 AM",
      assignments: {
        pending: 2,
        upcoming: 3,
      },
      syllabus: {
        completed: [
          "Differential Equations",
          "Linear Algebra",
          "Vector Calculus",
          "Complex Numbers",
        ],
        upcoming: [
          "Fourier Series",
          "Laplace Transforms",
          "Partial Differential Equations",
        ],
      },
      resources: {
        lectures: 28,
        notes: 15,
        assignments: 12,
      },
      performance: {
        quizzes: 85,
        midterm: 92,
        assignments: 88,
      },
    },
    {
      id: "2",
      code: "PHY302",
      name: "Quantum Physics",
      credits: 4,
      teacher: {
        name: "Dr. Kavita Reddy",
        email: "kavita.reddy@srm.edu",
        office: "Block B, Room 412",
        avatar: "KR",
      },
      schedule: {
        days: ["Tue", "Thu"],
        time: "11:00 AM - 01:00 PM",
        room: "Room 305",
      },
      progress: {
        completed: 24,
        total: 40,
        percentage: 60,
      },
      grade: {
        current: "A",
        percentage: 91,
      },
      attendance: {
        present: 38,
        total: 40,
        percentage: 95.0,
      },
      nextClass: "Nov 1, 11:00 AM",
      assignments: {
        pending: 1,
        upcoming: 2,
      },
      syllabus: {
        completed: [
          "Wave-Particle Duality",
          "Schrödinger Equation",
          "Quantum Mechanics Basics",
        ],
        upcoming: [
          "Quantum Entanglement",
          "Heisenberg Principle",
          "Quantum Computing Intro",
        ],
      },
      resources: {
        lectures: 24,
        notes: 18,
        assignments: 10,
      },
      performance: {
        quizzes: 88,
        midterm: 94,
        assignments: 91,
      },
    },
    {
      id: "3",
      code: "CHEM301",
      name: "Organic Chemistry",
      credits: 3,
      teacher: {
        name: "Prof. Suresh Mehta",
        email: "suresh.mehta@srm.edu",
        office: "Block C, Room 201",
        avatar: "SM",
      },
      schedule: {
        days: ["Mon", "Wed"],
        time: "02:00 PM - 03:30 PM",
        room: "Lab 102",
      },
      progress: {
        completed: 22,
        total: 38,
        percentage: 58,
      },
      grade: {
        current: "A-",
        percentage: 86,
      },
      attendance: {
        present: 35,
        total: 38,
        percentage: 92.1,
      },
      nextClass: "Today, 02:00 PM",
      assignments: {
        pending: 3,
        upcoming: 1,
      },
      syllabus: {
        completed: [
          "Hydrocarbons",
          "Functional Groups",
          "Reaction Mechanisms",
        ],
        upcoming: [
          "Stereochemistry",
          "Aromatics",
          "Polymers",
        ],
      },
      resources: {
        lectures: 22,
        notes: 12,
        assignments: 15,
      },
      performance: {
        quizzes: 82,
        midterm: 88,
        assignments: 87,
      },
    },
    {
      id: "4",
      code: "ENG201",
      name: "English Literature",
      credits: 3,
      teacher: {
        name: "Dr. Ananya Singh",
        email: "ananya.singh@srm.edu",
        office: "Block D, Room 108",
        avatar: "AS",
      },
      schedule: {
        days: ["Tue", "Thu"],
        time: "09:00 AM - 10:30 AM",
        room: "Room 105",
      },
      progress: {
        completed: 26,
        total: 42,
        percentage: 62,
      },
      grade: {
        current: "A",
        percentage: 90,
      },
      attendance: {
        present: 40,
        total: 42,
        percentage: 95.2,
      },
      nextClass: "Nov 1, 09:00 AM",
      assignments: {
        pending: 1,
        upcoming: 2,
      },
      syllabus: {
        completed: [
          "Shakespeare's Plays",
          "Romantic Poetry",
          "Victorian Literature",
        ],
        upcoming: [
          "Modern Drama",
          "Contemporary Fiction",
          "Literary Criticism",
        ],
      },
      resources: {
        lectures: 26,
        notes: 20,
        assignments: 8,
      },
      performance: {
        quizzes: 87,
        midterm: 92,
        assignments: 91,
      },
    },
    {
      id: "5",
      code: "CS401",
      name: "Data Structures & Algorithms",
      credits: 4,
      teacher: {
        name: "Dr. Amit Patel",
        email: "amit.patel@srm.edu",
        office: "Block E, Room 501",
        avatar: "AP",
      },
      schedule: {
        days: ["Mon", "Wed", "Fri"],
        time: "11:00 AM - 12:30 PM",
        room: "Lab 401",
      },
      progress: {
        completed: 30,
        total: 48,
        percentage: 63,
      },
      grade: {
        current: "A+",
        percentage: 94,
      },
      attendance: {
        present: 46,
        total: 48,
        percentage: 95.8,
      },
      nextClass: "Tomorrow, 11:00 AM",
      assignments: {
        pending: 2,
        upcoming: 4,
      },
      syllabus: {
        completed: [
          "Arrays & Strings",
          "Linked Lists",
          "Stacks & Queues",
          "Trees & Graphs",
        ],
        upcoming: [
          "Dynamic Programming",
          "Greedy Algorithms",
          "Advanced Graph Algorithms",
        ],
      },
      resources: {
        lectures: 30,
        notes: 25,
        assignments: 18,
      },
      performance: {
        quizzes: 92,
        midterm: 96,
        assignments: 94,
      },
    },
    {
      id: "6",
      code: "BIO301",
      name: "Molecular Biology",
      credits: 3,
      teacher: {
        name: "Dr. Meera Joshi",
        email: "meera.joshi@srm.edu",
        office: "Block F, Room 203",
        avatar: "MJ",
      },
      schedule: {
        days: ["Tue", "Fri"],
        time: "03:00 PM - 05:00 PM",
        room: "Lab 201",
      },
      progress: {
        completed: 20,
        total: 36,
        percentage: 56,
      },
      grade: {
        current: "A",
        percentage: 89,
      },
      attendance: {
        present: 34,
        total: 36,
        percentage: 94.4,
      },
      nextClass: "Tomorrow, 03:00 PM",
      assignments: {
        pending: 1,
        upcoming: 3,
      },
      syllabus: {
        completed: [
          "DNA Structure",
          "RNA & Transcription",
          "Protein Synthesis",
        ],
        upcoming: [
          "Gene Expression",
          "Genetic Engineering",
          "Biotechnology Applications",
        ],
      },
      resources: {
        lectures: 20,
        notes: 14,
        assignments: 9,
      },
      performance: {
        quizzes: 86,
        midterm: 90,
        assignments: 90,
      },
    },
  ];

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <BookOpen className="inline-block w-6 h-6 mr-2 text-amber-200" />
              My <span className="font-medium text-amber-200">Courses</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              {courses.length} courses enrolled • {courses.reduce((acc, c) => acc + c.credits, 0)} total credits
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-neutral-500 text-xs">Overall GPA</p>
              <p className="text-amber-200 text-xl font-semibold">8.85</p>
            </div>
            <div className="text-right">
              <p className="text-neutral-500 text-xs">Avg Attendance</p>
              <p className="text-amber-200 text-xl font-semibold">94.5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden gap-6 p-6">
        {/* Left Column - Courses List */}
        <div className="w-[400px] flex flex-col">
          <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-5 space-y-3">
                {courses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      onClick={() => setSelectedCourse(course)}
                      className={`p-5 cursor-pointer transition-all ${
                        selectedCourse?.id === course.id
                          ? "bg-amber-200/10 border-amber-200/50 shadow-lg shadow-amber-200/10"
                          : "bg-black/40 border-neutral-800/50 hover:border-amber-200/30"
                      }`}
                    >
                      {/* Course Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-amber-200/20 text-amber-200 text-xs border-amber-200/30">
                              {course.code}
                            </Badge>
                            <Badge className="bg-neutral-800/50 text-neutral-400 text-xs border-neutral-700">
                              {course.credits} Credits
                            </Badge>
                          </div>
                          <h3 className="text-white font-semibold text-sm mb-1">
                            {course.name}
                          </h3>
                          <p className="text-neutral-500 text-xs flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {course.teacher.name}
                          </p>
                        </div>
                        <Badge
                          className={`text-xs font-semibold ${
                            course.grade.percentage >= 90
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : course.grade.percentage >= 80
                              ? "bg-amber-200/20 text-amber-200 border-amber-200/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }`}
                        >
                          {course.grade.current}
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-neutral-500">Progress</span>
                          <span className="text-xs text-amber-200 font-medium">
                            {course.progress.percentage}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-neutral-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress.percentage}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="h-full bg-amber-200 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-neutral-500">
                            Attendance: <span className="text-white font-medium">{course.attendance.percentage}%</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-amber-200" />
                          <span className="text-neutral-500">
                            Pending: <span className="text-white font-medium">{course.assignments.pending}</span>
                          </span>
                        </div>
                      </div>

                      {/* Next Class */}
                      <div className="mt-3 pt-3 border-t border-neutral-800/50">
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <Clock className="w-3.5 h-3.5" />
                          Next class: <span className="text-amber-200 font-medium">{course.nextClass}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Right Column - Course Details */}
        <div className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {selectedCourse ? (
              <motion.div
                key={selectedCourse.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden">
                  {/* Course Details Header */}
                  <div className="px-6 py-5 border-b border-neutral-800/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30">
                            {selectedCourse.code}
                          </Badge>
                          <Badge className="bg-neutral-800/50 text-neutral-400 border-neutral-700">
                            {selectedCourse.credits} Credits
                          </Badge>
                        </div>
                        <h2 className="text-white text-xl font-semibold mb-1">
                          {selectedCourse.name}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {selectedCourse.schedule.days.join(", ")}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {selectedCourse.schedule.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {selectedCourse.schedule.room}
                          </span>
                        </div>
                      </div>
                      <Badge
                        className={`text-lg font-bold px-4 py-2 ${
                          selectedCourse.grade.percentage >= 90
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : selectedCourse.grade.percentage >= 80
                            ? "bg-amber-200/20 text-amber-200 border-amber-200/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }`}
                      >
                        {selectedCourse.grade.current}
                      </Badge>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <ScrollArea className="flex-1">
                    <div className="p-6 space-y-6">
                      {/* Performance Insights */}
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="p-4 bg-black/40 border-neutral-800/50">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-amber-200/20 flex items-center justify-center">
                              <Target className="w-5 h-5 text-amber-200" />
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500">Current Grade</p>
                              <p className="text-2xl font-bold text-white">{selectedCourse.grade.percentage}%</p>
                            </div>
                          </div>
                        </Card>
                        <Card className="p-4 bg-black/40 border-neutral-800/50">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500">Attendance</p>
                              <p className="text-2xl font-bold text-white">{selectedCourse.attendance.percentage}%</p>
                            </div>
                          </div>
                        </Card>
                        <Card className="p-4 bg-black/40 border-neutral-800/50">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500">Progress</p>
                              <p className="text-2xl font-bold text-white">{selectedCourse.progress.percentage}%</p>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Teacher Information */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-amber-200" />
                          Course Instructor
                        </h3>
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                            <span className="text-amber-200 font-bold text-xl">
                              {selectedCourse.teacher.avatar}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-2">
                              {selectedCourse.teacher.name}
                            </h4>
                            <div className="space-y-1.5">
                              <p className="text-sm text-neutral-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {selectedCourse.teacher.email}
                              </p>
                              <p className="text-sm text-neutral-400 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {selectedCourse.teacher.office}
                              </p>
                            </div>
                            <Button className="mt-4 h-9 bg-amber-200 hover:bg-amber-300 text-black text-sm font-medium">
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </Card>

                      {/* Performance Breakdown */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-amber-200" />
                          Performance Breakdown
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-neutral-400">Quizzes</span>
                              <span className="text-sm text-white font-semibold">{selectedCourse.performance.quizzes}%</span>
                            </div>
                            <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-amber-200 rounded-full"
                                style={{ width: `${selectedCourse.performance.quizzes}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-neutral-400">Midterm Exam</span>
                              <span className="text-sm text-white font-semibold">{selectedCourse.performance.midterm}%</span>
                            </div>
                            <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-400 rounded-full"
                                style={{ width: `${selectedCourse.performance.midterm}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-neutral-400">Assignments</span>
                              <span className="text-sm text-white font-semibold">{selectedCourse.performance.assignments}%</span>
                            </div>
                            <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-400 rounded-full"
                                style={{ width: `${selectedCourse.performance.assignments}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </Card>

                      <div className="grid grid-cols-2 gap-6">
                        {/* Syllabus Progress */}
                        <Card className="p-5 bg-black/40 border-neutral-800/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-amber-200" />
                            Syllabus Progress
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <p className="text-xs text-neutral-500 mb-2 font-medium">Completed Topics</p>
                              <div className="space-y-2">
                                {selectedCourse.syllabus.completed.map((topic, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                    <span className="text-neutral-400">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 mb-2 font-medium">Upcoming Topics</p>
                              <div className="space-y-2">
                                {selectedCourse.syllabus.upcoming.map((topic, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Circle className="w-4 h-4 text-neutral-600 shrink-0" />
                                    <span className="text-neutral-500">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>

                        {/* Course Resources */}
                        <Card className="p-5 bg-black/40 border-neutral-800/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-amber-200" />
                            Course Resources
                          </h3>
                          <div className="space-y-3">
                            <Card className="p-4 bg-neutral-900/50 border-neutral-800/50 hover:border-amber-200/30 transition-colors cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <Video className="w-5 h-5 text-red-400" />
                                  </div>
                                  <div>
                                    <p className="text-sm text-white font-medium">Video Lectures</p>
                                    <p className="text-xs text-neutral-500">Recorded sessions</p>
                                  </div>
                                </div>
                                <Badge className="bg-neutral-800 text-white">
                                  {selectedCourse.resources.lectures}
                                </Badge>
                              </div>
                            </Card>
                            <Card className="p-4 bg-neutral-900/50 border-neutral-800/50 hover:border-amber-200/30 transition-colors cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                  </div>
                                  <div>
                                    <p className="text-sm text-white font-medium">Study Notes</p>
                                    <p className="text-xs text-neutral-500">PDF documents</p>
                                  </div>
                                </div>
                                <Badge className="bg-neutral-800 text-white">
                                  {selectedCourse.resources.notes}
                                </Badge>
                              </div>
                            </Card>
                            <Card className="p-4 bg-neutral-900/50 border-neutral-800/50 hover:border-amber-200/30 transition-colors cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-amber-200/20 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-amber-200" />
                                  </div>
                                  <div>
                                    <p className="text-sm text-white font-medium">Assignments</p>
                                    <p className="text-xs text-neutral-500">Tasks & quizzes</p>
                                  </div>
                                </div>
                                <Badge className="bg-neutral-800 text-white">
                                  {selectedCourse.resources.assignments}
                                </Badge>
                              </div>
                            </Card>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </ScrollArea>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex items-center justify-center"
              >
                <Card className="p-16 bg-neutral-950/50 border-neutral-800/50 text-center">
                  <BookOpen className="w-20 h-20 text-neutral-700 mx-auto mb-6" />
                  <p className="text-neutral-400 text-lg mb-2 font-medium">
                    Select a course to view details
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Choose from the list to see insights and information
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

export default StudentsCourses;