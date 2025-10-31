"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  TrendingUp,
  FileText,
  Video,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Target,
  Award,
  Upload,
  Plus,
  Edit,
} from "lucide-react";

interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  sections: {
    name: string;
    students: number;
    schedule: string;
  }[];
  totalStudents: number;
  schedule: {
    days: string[];
    time: string;
  };
  semester: string;
  performance: {
    averageGrade: number;
    passRate: number;
    averageAttendance: number;
  };
  upcomingClasses: {
    section: string;
    date: string;
    time: string;
    topic: string;
  }[];
  assignments: {
    total: number;
    pending: number;
    graded: number;
  };
  materials: {
    lectures: number;
    notes: number;
    assignments: number;
  };
  syllabus: {
    completed: string[];
    upcoming: string[];
  };
  recentActivity: {
    type: string;
    description: string;
    time: string;
  }[];
  gradeDistribution: {
    grade: string;
    count: number;
    percentage: number;
  }[];
}

const TeachersCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Mock data - Courses
  const courses: Course[] = [
    {
      id: "1",
      code: "MATH301",
      name: "Advanced Mathematics",
      credits: 4,
      sections: [
        { name: "Class 10-A", students: 45, schedule: "Mon, Wed, Fri - 09:00 AM" },
        { name: "Class 10-B", students: 42, schedule: "Tue, Thu - 11:00 AM" },
      ],
      totalStudents: 87,
      schedule: {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        time: "09:00 AM - 12:00 PM",
      },
      semester: "Fall 2025",
      performance: {
        averageGrade: 85.5,
        passRate: 94.2,
        averageAttendance: 92.8,
      },
      upcomingClasses: [
        {
          section: "Class 10-A",
          date: "Tomorrow",
          time: "09:00 AM",
          topic: "Differential Equations",
        },
        {
          section: "Class 10-B",
          date: "Nov 1, 2025",
          time: "11:00 AM",
          topic: "Linear Algebra Review",
        },
      ],
      assignments: {
        total: 24,
        pending: 8,
        graded: 16,
      },
      materials: {
        lectures: 32,
        notes: 28,
        assignments: 24,
      },
      syllabus: {
        completed: [
          "Calculus Fundamentals",
          "Integration Techniques",
          "Series and Sequences",
          "Vector Calculus",
        ],
        upcoming: [
          "Differential Equations",
          "Fourier Analysis",
          "Complex Analysis",
        ],
      },
      recentActivity: [
        {
          type: "assignment",
          description: "Assignment 5 submitted by 38 students",
          time: "2 hours ago",
        },
        {
          type: "material",
          description: "Uploaded lecture notes for Chapter 7",
          time: "5 hours ago",
        },
        {
          type: "grade",
          description: "Graded midterm exams for Class 10-A",
          time: "1 day ago",
        },
      ],
      gradeDistribution: [
        { grade: "A+", count: 12, percentage: 13.8 },
        { grade: "A", count: 24, percentage: 27.6 },
        { grade: "A-", count: 18, percentage: 20.7 },
        { grade: "B+", count: 15, percentage: 17.2 },
        { grade: "B", count: 10, percentage: 11.5 },
        { grade: "B-", count: 8, percentage: 9.2 },
      ],
    },
    {
      id: "2",
      code: "MATH401",
      name: "Calculus & Analytics",
      credits: 4,
      sections: [
        { name: "Class 11-A", students: 38, schedule: "Mon, Wed - 02:00 PM" },
        { name: "Class 11-B", students: 40, schedule: "Tue, Thu - 03:00 PM" },
      ],
      totalStudents: 78,
      schedule: {
        days: ["Mon", "Tue", "Wed", "Thu"],
        time: "02:00 PM - 05:00 PM",
      },
      semester: "Fall 2025",
      performance: {
        averageGrade: 82.3,
        passRate: 91.0,
        averageAttendance: 89.5,
      },
      upcomingClasses: [
        {
          section: "Class 11-A",
          date: "Tomorrow",
          time: "02:00 PM",
          topic: "Multivariable Calculus",
        },
        {
          section: "Class 11-B",
          date: "Nov 1, 2025",
          time: "03:00 PM",
          topic: "Optimization Problems",
        },
      ],
      assignments: {
        total: 20,
        pending: 12,
        graded: 8,
      },
      materials: {
        lectures: 28,
        notes: 24,
        assignments: 20,
      },
      syllabus: {
        completed: [
          "Limits and Continuity",
          "Derivatives",
          "Integration",
        ],
        upcoming: [
          "Multivariable Calculus",
          "Optimization",
          "Advanced Integration",
        ],
      },
      recentActivity: [
        {
          type: "quiz",
          description: "Quiz 3 completed by Class 11-A",
          time: "3 hours ago",
        },
        {
          type: "material",
          description: "Added video lecture on optimization",
          time: "1 day ago",
        },
        {
          type: "announcement",
          description: "Posted exam schedule for midterms",
          time: "2 days ago",
        },
      ],
      gradeDistribution: [
        { grade: "A+", count: 8, percentage: 10.3 },
        { grade: "A", count: 20, percentage: 25.6 },
        { grade: "A-", count: 16, percentage: 20.5 },
        { grade: "B+", count: 14, percentage: 17.9 },
        { grade: "B", count: 12, percentage: 15.4 },
        { grade: "B-", count: 8, percentage: 10.3 },
      ],
    },
    {
      id: "3",
      code: "MATH501",
      name: "Mathematical Statistics",
      credits: 3,
      sections: [
        { name: "Class 12-A", students: 35, schedule: "Mon, Thu - 10:00 AM" },
      ],
      totalStudents: 35,
      schedule: {
        days: ["Mon", "Thu"],
        time: "10:00 AM - 12:00 PM",
      },
      semester: "Fall 2025",
      performance: {
        averageGrade: 88.2,
        passRate: 97.1,
        averageAttendance: 95.2,
      },
      upcomingClasses: [
        {
          section: "Class 12-A",
          date: "Nov 4, 2025",
          time: "10:00 AM",
          topic: "Hypothesis Testing",
        },
      ],
      assignments: {
        total: 15,
        pending: 5,
        graded: 10,
      },
      materials: {
        lectures: 20,
        notes: 18,
        assignments: 15,
      },
      syllabus: {
        completed: [
          "Probability Theory",
          "Distributions",
          "Statistical Inference",
        ],
        upcoming: [
          "Hypothesis Testing",
          "Regression Analysis",
          "Time Series",
        ],
      },
      recentActivity: [
        {
          type: "assignment",
          description: "Assignment 4 graded for all students",
          time: "1 hour ago",
        },
        {
          type: "material",
          description: "Uploaded practice problems",
          time: "4 hours ago",
        },
        {
          type: "grade",
          description: "Updated gradebook with quiz scores",
          time: "2 days ago",
        },
      ],
      gradeDistribution: [
        { grade: "A+", count: 10, percentage: 28.6 },
        { grade: "A", count: 12, percentage: 34.3 },
        { grade: "A-", count: 8, percentage: 22.9 },
        { grade: "B+", count: 3, percentage: 8.6 },
        { grade: "B", count: 2, percentage: 5.7 },
        { grade: "B-", count: 0, percentage: 0 },
      ],
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
              {courses.length} courses • {courses.reduce((acc, c) => acc + c.totalStudents, 0)} total students
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="h-10 bg-amber-200 hover:bg-amber-300 text-black font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Add Course Material
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden gap-6 p-6">
        {/* Left Column - Courses List */}
        <div className="w-[400px] flex flex-col overflow-hidden min-h-0">
          <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
            <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
              <h3 className="text-white font-semibold">Teaching Courses</h3>
              <p className="text-sm text-neutral-500 mt-1">Fall 2025 Semester</p>
            </div>
            <ScrollArea className="flex-1 min-h-0">
              <div className="p-6 space-y-3">
                {courses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
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
                            <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30 text-xs">
                              {course.code}
                            </Badge>
                            <Badge className="bg-neutral-800/50 text-neutral-400 border-neutral-700 text-xs">
                              {course.credits} Credits
                            </Badge>
                          </div>
                          <h3 className="text-white font-semibold text-sm mb-2">
                            {course.name}
                          </h3>
                        </div>
                      </div>

                      {/* Sections */}
                      <div className="mb-3 space-y-1.5">
                        {course.sections.map((section, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs">
                            <span className="text-neutral-500">{section.name}</span>
                            <Badge className="bg-neutral-900/50 text-neutral-400 text-xs">
                              {section.students} students
                            </Badge>
                          </div>
                        ))}
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-neutral-800/50">
                        <div>
                          <p className="text-neutral-500 mb-1">Avg Grade</p>
                          <p className="text-white font-semibold">{course.performance.averageGrade}%</p>
                        </div>
                        <div>
                          <p className="text-neutral-500 mb-1">Attendance</p>
                          <p className="text-white font-semibold">{course.performance.averageAttendance}%</p>
                        </div>
                      </div>

                      {/* Pending Assignments Alert */}
                      {course.assignments.pending > 0 && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-amber-200">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{course.assignments.pending} assignments to grade</span>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Right Column - Course Details */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
          <AnimatePresence mode="wait">
            {selectedCourse ? (
              <motion.div
                key={selectedCourse.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col overflow-hidden min-h-0"
              >
                <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
                  {/* Course Details Header */}
                  <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30">
                            {selectedCourse.code}
                          </Badge>
                          <Badge className="bg-neutral-800/50 text-neutral-400 border-neutral-700">
                            {selectedCourse.credits} Credits
                          </Badge>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            {selectedCourse.semester}
                          </Badge>
                        </div>
                        <h2 className="text-white text-xl font-semibold mb-1">
                          {selectedCourse.name}
                        </h2>
                        <p className="text-sm text-neutral-500">
                          {selectedCourse.sections.length} sections • {selectedCourse.totalStudents} students
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="h-9 border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-200/50"
                      >
                        <Edit className="w-3.5 h-3.5 mr-2" />
                        Edit Course
                      </Button>
                    </div>

                    {/* Performance Overview */}
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="p-4 bg-black/40 border-neutral-800/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-200/20 flex items-center justify-center">
                            <Target className="w-5 h-5 text-amber-200" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-500">Avg Grade</p>
                            <p className="text-xl font-bold text-white">
                              {selectedCourse.performance.averageGrade}%
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4 bg-black/40 border-neutral-800/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-500">Pass Rate</p>
                            <p className="text-xl font-bold text-white">
                              {selectedCourse.performance.passRate}%
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4 bg-black/40 border-neutral-800/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-500">Attendance</p>
                            <p className="text-xl font-bold text-white">
                              {selectedCourse.performance.averageAttendance}%
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <ScrollArea className="flex-1 min-h-0">
                    <div className="p-6 space-y-6">
                      {/* Upcoming Classes */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-amber-200" />
                          Upcoming Classes
                        </h3>
                        <div className="space-y-3">
                          {selectedCourse.upcomingClasses.map((cls, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-lg"
                            >
                              <div>
                                <p className="text-white font-medium text-sm mb-1">
                                  {cls.topic}
                                </p>
                                <div className="flex items-center gap-3 text-xs text-neutral-500">
                                  <span>{cls.section}</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {cls.date} at {cls.time}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Assignments Status */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-amber-200" />
                          Assignments Overview
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-lg text-center">
                            <p className="text-3xl font-bold text-white mb-1">
                              {selectedCourse.assignments.total}
                            </p>
                            <p className="text-xs text-neutral-500">Total</p>
                          </div>
                          <div className="p-4 bg-amber-200/10 border border-amber-200/30 rounded-lg text-center">
                            <p className="text-3xl font-bold text-amber-200 mb-1">
                              {selectedCourse.assignments.pending}
                            </p>
                            <p className="text-xs text-neutral-500">Pending</p>
                          </div>
                          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                            <p className="text-3xl font-bold text-green-400 mb-1">
                              {selectedCourse.assignments.graded}
                            </p>
                            <p className="text-xs text-neutral-500">Graded</p>
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
                              <p className="text-xs text-neutral-500 mb-2 font-medium">
                                Completed Topics
                              </p>
                              <div className="space-y-2">
                                {selectedCourse.syllabus.completed.map((topic, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                    <span className="text-neutral-400">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 mb-2 font-medium">
                                Upcoming Topics
                              </p>
                              <div className="space-y-2">
                                {selectedCourse.syllabus.upcoming.map((topic, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <div className="w-4 h-4 rounded-full border-2 border-neutral-600 shrink-0" />
                                    <span className="text-neutral-500">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>

                        {/* Course Materials */}
                        <Card className="p-5 bg-black/40 border-neutral-800/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-amber-200" />
                            Course Materials
                          </h3>
                          <div className="space-y-3">
                            <Card className="p-4 bg-neutral-900/50 border-neutral-800/50 hover:border-amber-200/30 transition-colors cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <Video className="w-5 h-5 text-red-400" />
                                  </div>
                                  <div>
                                    <p className="text-sm text-white font-medium">
                                      Video Lectures
                                    </p>
                                    <p className="text-xs text-neutral-500">Recorded sessions</p>
                                  </div>
                                </div>
                                <Badge className="bg-neutral-800 text-white">
                                  {selectedCourse.materials.lectures}
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
                                  {selectedCourse.materials.notes}
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
                                  {selectedCourse.materials.assignments}
                                </Badge>
                              </div>
                            </Card>
                          </div>
                        </Card>
                      </div>

                      {/* Grade Distribution */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-amber-200" />
                          Grade Distribution
                        </h3>
                        <div className="space-y-3">
                          {selectedCourse.gradeDistribution.map((item, idx) => (
                            <div key={idx}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-semibold text-white w-8">
                                    {item.grade}
                                  </span>
                                  <span className="text-xs text-neutral-500">
                                    {item.count} students
                                  </span>
                                </div>
                                <span className="text-sm text-white font-medium">
                                  {item.percentage}%
                                </span>
                              </div>
                              <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    item.grade.includes("+")
                                      ? "bg-green-400"
                                      : item.grade.includes("-")
                                      ? "bg-amber-200"
                                      : "bg-blue-400"
                                  }`}
                                  style={{ width: `${item.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Recent Activity */}
                      <Card className="p-5 bg-black/40 border-neutral-800/50">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-amber-200" />
                          Recent Activity
                        </h3>
                        <div className="space-y-3">
                          {selectedCourse.recentActivity.map((activity, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-lg"
                            >
                              <div className="w-2 h-2 rounded-full bg-amber-200 mt-2 shrink-0" />
                              <div className="flex-1">
                                <p className="text-sm text-white">{activity.description}</p>
                                <p className="text-xs text-neutral-500 mt-1">
                                  {activity.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
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
                    Choose from the list to see course insights and manage materials
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

export default TeachersCourses;