"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  QrCode,
  Calendar,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertCircle,
  BookOpen,
} from "lucide-react";

interface CourseAttendance {
  courseName: string;
  totalClasses: number;
  attended: number;
  percentage: number;
  status: "good" | "warning" | "critical";
  recentAttendance: { date: string; status: "present" | "absent" }[];
}

const StudentsAttendance = () => {
  const [qrLink, setQrLink] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Mock data
  const overallAttendance = {
    totalClasses: 200,
    attended: 189,
    percentage: 94.5,
  };

  const coursesAttendance: CourseAttendance[] = [
    {
      courseName: "Mathematics",
      totalClasses: 45,
      attended: 43,
      percentage: 95.6,
      status: "good",
      recentAttendance: [
        { date: "Oct 30", status: "present" },
        { date: "Oct 28", status: "present" },
        { date: "Oct 26", status: "present" },
        { date: "Oct 24", status: "present" },
        { date: "Oct 22", status: "absent" },
        { date: "Oct 20", status: "present" },
        { date: "Oct 18", status: "present" },
      ],
    },
    {
      courseName: "Physics",
      totalClasses: 40,
      attended: 38,
      percentage: 95.0,
      status: "good",
      recentAttendance: [
        { date: "Oct 29", status: "present" },
        { date: "Oct 27", status: "present" },
        { date: "Oct 25", status: "present" },
        { date: "Oct 23", status: "present" },
        { date: "Oct 21", status: "absent" },
        { date: "Oct 19", status: "present" },
        { date: "Oct 17", status: "present" },
      ],
    },
    {
      courseName: "Chemistry",
      totalClasses: 38,
      attended: 35,
      percentage: 92.1,
      status: "good",
      recentAttendance: [
        { date: "Oct 30", status: "present" },
        { date: "Oct 28", status: "absent" },
        { date: "Oct 26", status: "present" },
        { date: "Oct 24", status: "present" },
        { date: "Oct 22", status: "present" },
        { date: "Oct 20", status: "absent" },
        { date: "Oct 18", status: "present" },
      ],
    },
    {
      courseName: "English",
      totalClasses: 35,
      attended: 33,
      percentage: 94.3,
      status: "good",
      recentAttendance: [
        { date: "Oct 29", status: "present" },
        { date: "Oct 27", status: "present" },
        { date: "Oct 25", status: "present" },
        { date: "Oct 23", status: "absent" },
        { date: "Oct 21", status: "present" },
        { date: "Oct 19", status: "present" },
        { date: "Oct 17", status: "present" },
      ],
    },
    {
      courseName: "Computer Science",
      totalClasses: 42,
      attended: 40,
      percentage: 95.2,
      status: "good",
      recentAttendance: [
        { date: "Oct 30", status: "present" },
        { date: "Oct 28", status: "present" },
        { date: "Oct 26", status: "absent" },
        { date: "Oct 24", status: "present" },
        { date: "Oct 22", status: "present" },
        { date: "Oct 20", status: "present" },
        { date: "Oct 18", status: "absent" },
      ],
    },
    {
      courseName: "Biology",
      totalClasses: 36,
      attended: 34,
      percentage: 94.4,
      status: "good",
      recentAttendance: [
        { date: "Oct 30", status: "present" },
        { date: "Oct 28", status: "present" },
        { date: "Oct 26", status: "present" },
        { date: "Oct 24", status: "absent" },
        { date: "Oct 22", status: "present" },
        { date: "Oct 20", status: "present" },
        { date: "Oct 18", status: "absent" },
      ],
    },
  ];

  const handleQrSubmit = () => {
    if (qrLink.trim()) {
      alert(`Attendance marked successfully for: ${qrLink}`);
      setQrLink("");
    }
  };

  const getStatusColor = (status: "good" | "warning" | "critical") => {
    switch (status) {
      case "good":
        return "text-green-400 bg-green-400/10 border-green-400/30";
      case "warning":
        return "text-amber-400 bg-amber-400/10 border-amber-400/30";
      case "critical":
        return "text-red-400 bg-red-400/10 border-red-400/30";
    }
  };

  const getStatusIcon = (status: "good" | "warning" | "critical") => {
    switch (status) {
      case "good":
        return <TrendingUp className="w-4 h-4" />;
      case "warning":
        return <AlertCircle className="w-4 h-4" />;
      case "critical":
        return <TrendingDown className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <Calendar className="inline-block w-6 h-6 mr-2 text-amber-200" />
              My <span className="font-medium text-amber-200">Attendance</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-0.5">Track and manage your class attendance</p>
          </div>
          {/* Overall Attendance Badge */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-neutral-500">Overall Attendance</p>
              <p className="text-2xl font-bold text-amber-200">{overallAttendance.percentage}%</p>
              <p className="text-xs text-neutral-600">
                {overallAttendance.attended}/{overallAttendance.totalClasses} classes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex gap-4 p-4">
        {/* Left Column - QR Code & Overall Stats */}
        <div className="w-80 space-y-4">
          {/* QR Code Scanner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-5 bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-amber-200/10 rounded-lg">
                  <QrCode className="w-5 h-5 text-amber-200" />
                </div>
                <h3 className="text-lg font-medium text-white">Mark Attendance</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-black/40 rounded-lg border border-neutral-800/50 text-center">
                  <QrCode className="w-16 h-16 text-amber-200/30 mx-auto mb-2" />
                  <p className="text-xs text-neutral-500">Scan QR code or paste link below</p>
                </div>
                <Input
                  placeholder="Paste QR link here..."
                  value={qrLink}
                  onChange={(e) => setQrLink(e.target.value)}
                  className="h-10 text-sm bg-black/40 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
                />
                <Button
                  onClick={handleQrSubmit}
                  className="w-full h-10 bg-amber-200 hover:bg-amber-300 text-black font-medium rounded-lg"
                >
                  Submit Attendance
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Monthly Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
              <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-200" />
                This Month
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Total Classes</span>
                  <span className="text-sm font-semibold text-white">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Present</span>
                  <span className="text-sm font-semibold text-green-400">40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Absent</span>
                  <span className="text-sm font-semibold text-red-400">2</span>
                </div>
                <div className="h-px bg-neutral-800 my-2" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Attendance %</span>
                  <span className="text-lg font-bold text-amber-200">95.2%</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Course-wise Attendance */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-200" />
              Course-wise Attendance
            </h2>
            <p className="text-xs text-neutral-500">Click on a course to view details</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {coursesAttendance.map((course, idx) => (
              <motion.div
                key={course.courseName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Card
                  onClick={() =>
                    setSelectedCourse(
                      selectedCourse === course.courseName ? null : course.courseName
                    )
                  }
                  className={`p-5 cursor-pointer transition-all ${
                    selectedCourse === course.courseName
                      ? "bg-amber-200/10 border-amber-200/50"
                      : "bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {course.courseName}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {course.attended}/{course.totalClasses} classes
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(course.status)} text-xs`}>
                      {getStatusIcon(course.status)}
                      <span className="ml-1">{course.percentage}%</span>
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-200 rounded-full transition-all"
                        style={{ width: `${course.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Recent Attendance - Only show if selected */}
                  {selectedCourse === course.courseName && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-neutral-800 pt-3 mt-3"
                    >
                      <p className="text-xs text-neutral-500 mb-2">Recent Attendance</p>
                      <div className="flex gap-1.5 flex-wrap">
                        {course.recentAttendance.map((record, i) => (
                          <div
                            key={i}
                            className={`flex flex-col items-center gap-1 p-2 rounded-lg border ${
                              record.status === "present"
                                ? "bg-green-400/10 border-green-400/30"
                                : "bg-red-400/10 border-red-400/30"
                            }`}
                          >
                            {record.status === "present" ? (
                              <CheckCircle className="w-3 h-3 text-green-400" />
                            ) : (
                              <XCircle className="w-3 h-3 text-red-400" />
                            )}
                            <span className="text-xs text-neutral-400">{record.date}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsAttendance;