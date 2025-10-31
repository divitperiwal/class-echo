"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  QrCode,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  Search,
  Download,
  RefreshCw,
  UserCheck,
  UserX,
  Book,
  Grid3x3,
  Save,
  AlertCircle,
} from "lucide-react";

interface Student {
  id: string;
  rollNumber: string;
  name: string;
  avatar: string;
  email: string;
  status: "present" | "absent" | "pending";
  markedAt?: string;
  markedBy?: "qr" | "manual";
}

interface Section {
  id: string;
  name: string;
  course: string;
  courseCode: string;
  totalStudents: number;
  schedule: string;
}

const TeachersAttendance = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [qrCode, setQrCode] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [students, setStudents] = useState<Student[]>([]);
  const [qrTimer, setQrTimer] = useState(300); // 5 minutes in seconds
  const [isQrActive, setIsQrActive] = useState(false);

  // Mock data - Sections
  const sections: Section[] = [
    {
      id: "1",
      name: "Section G2",
      course: "Advanced Mathematics",
      courseCode: "MATH301",
      totalStudents: 45,
      schedule: "Mon, Wed, Fri - 09:00 AM",
    },
    {
      id: "2",
      name: "Section K2",
      course: "Advanced Mathematics",
      courseCode: "MATH301",
      totalStudents: 42,
      schedule: "Tue, Thu - 11:00 AM",
    },
    {
      id: "3",
      name: "Section L2",
      course: "Calculus & Analytics",
      courseCode: "MATH401",
      totalStudents: 38,
      schedule: "Mon, Wed - 02:00 PM",
    },
    {
      id: "4",
      name: "Section M2",
      course: "Calculus & Analytics",
      courseCode: "MATH401",
      totalStudents: 40,
      schedule: "Tue, Thu - 03:00 PM",
    },
  ];

  // Mock students data
  const mockStudents: Student[] = [
    {
      id: "1",
      rollNumber: "2024001",
      name: "Divit Periwal",
      avatar: "DP",
      email: "divit.periwal@student.srm.edu",
      status: "pending",
    },
    {
      id: "2",
      rollNumber: "2024002",
      name: "Aarav Sharma",
      avatar: "AS",
      email: "aarav.sharma@student.srm.edu",
      status: "pending",
    },
    {
      id: "3",
      rollNumber: "2024003",
      name: "Priya Verma",
      avatar: "PV",
      email: "priya.verma@student.srm.edu",
      status: "pending",
    },
    {
      id: "4",
      rollNumber: "2024004",
      name: "Rohan Kumar",
      avatar: "RK",
      email: "rohan.kumar@student.srm.edu",
      status: "pending",
    },
    {
      id: "5",
      rollNumber: "2024005",
      name: "Sneha Patel",
      avatar: "SP",
      email: "sneha.patel@student.srm.edu",
      status: "pending",
    },
    {
      id: "6",
      rollNumber: "2024006",
      name: "Arjun Reddy",
      avatar: "AR",
      email: "arjun.reddy@student.srm.edu",
      status: "pending",
    },
    {
      id: "7",
      rollNumber: "2024007",
      name: "Ananya Singh",
      avatar: "AS",
      email: "ananya.singh@student.srm.edu",
      status: "pending",
    },
    {
      id: "8",
      rollNumber: "2024008",
      name: "Karan Mehta",
      avatar: "KM",
      email: "karan.mehta@student.srm.edu",
      status: "pending",
    },
    {
      id: "9",
      rollNumber: "2024009",
      name: "Ishita Gupta",
      avatar: "IG",
      email: "ishita.gupta@student.srm.edu",
      status: "pending",
    },
    {
      id: "10",
      rollNumber: "2024010",
      name: "Vivek Joshi",
      avatar: "VJ",
      email: "vivek.joshi@student.srm.edu",
      status: "pending",
    },
  ];

  // Load students when section is selected
  useEffect(() => {
    if (selectedSection) {
      setStudents(mockStudents);
      setShowQR(false);
      setIsQrActive(false);
    }
  }, [selectedSection]);

  // QR Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isQrActive && qrTimer > 0) {
      interval = setInterval(() => {
        setQrTimer((prev) => {
          if (prev <= 1) {
            setIsQrActive(false);
            setShowQR(false);
            return 300;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQrActive, qrTimer]);

  const generateQRCode = () => {
    const code = `ATT-${selectedSection?.id}-${Date.now()}`;
    setQrCode(code);
    setShowQR(true);
    setIsQrActive(true);
    setQrTimer(300);
  };

  const closeQRCode = () => {
    setShowQR(false);
    setIsQrActive(false);
    setQrTimer(300);
  };

  const markAttendance = (studentId: string, status: "present" | "absent") => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              status,
              markedAt: new Date().toLocaleTimeString(),
              markedBy: "manual",
            }
          : student
      )
    );
  };

  const markAllPresent = () => {
    setStudents((prev) =>
      prev.map((student) => ({
        ...student,
        status: "present",
        markedAt: new Date().toLocaleTimeString(),
        markedBy: "manual",
      }))
    );
  };

  const markAllAbsent = () => {
    setStudents((prev) =>
      prev.map((student) => ({
        ...student,
        status: "absent",
        markedAt: new Date().toLocaleTimeString(),
        markedBy: "manual",
      }))
    );
  };

  const saveAttendance = () => {
    // In real app, save to backend
    alert("Attendance saved successfully!");
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.includes(searchQuery) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const attendanceStats = {
    present: students.filter((s) => s.status === "present").length,
    absent: students.filter((s) => s.status === "absent").length,
    pending: students.filter((s) => s.status === "pending").length,
    total: students.length,
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <UserCheck className="inline-block w-6 h-6 mr-2 text-amber-200" />
              Attendance <span className="font-medium text-amber-200">Management</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              Mark attendance for your classes
            </p>
          </div>
          {selectedSection && (
            <div className="flex items-center gap-4">
              <Input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="h-10 bg-neutral-950/50 border-neutral-800 text-white rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {!selectedSection ? (
          /* Section Selection View */
          <div className="flex-1 p-6 overflow-hidden flex flex-col">
            <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
              <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Grid3x3 className="w-5 h-5 text-amber-200" />
                  Select a Section
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Choose the class section to mark attendance
                </p>
              </div>
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-6 grid grid-cols-3 gap-3">
                  {sections.map((section, idx) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card
                        onClick={() => setSelectedSection(section)}
                        className="p-4 bg-black/40 border-neutral-800/50 hover:border-amber-200/50 hover:bg-amber-200/5 cursor-pointer transition-all group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-200/20 flex items-center justify-center group-hover:bg-amber-200/30 transition-colors">
                            <Users className="w-5 h-5 text-amber-200" />
                          </div>
                          <Badge className="bg-neutral-800/50 text-neutral-400 border-neutral-700 text-xs">
                            {section.totalStudents}
                          </Badge>
                        </div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          {section.name}
                        </h3>
                        <p className="text-neutral-400 text-xs mb-2">
                          {section.course}
                        </p>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30 text-xs">
                            {section.courseCode}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-2 pt-2 border-t border-neutral-800/50">
                          <Clock className="w-3 h-3" />
                          <span className="truncate">{section.schedule}</span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>
        ) : (
          /* Attendance Marking View */
          <div className="flex-1 flex gap-6 p-6 overflow-hidden">
            {/* Left Column - Actions & Stats */}
            <div className="w-[380px] flex flex-col overflow-hidden min-h-0">
              <ScrollArea className="flex-1 min-h-0">
                <div className="space-y-6 pr-4">
                {/* Selected Section Info */}
                <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {selectedSection.name}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        {selectedSection.course}
                      </p>
                    </div>
                    <Button
                      onClick={() => setSelectedSection(null)}
                      variant="outline"
                      className="h-9 text-xs border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-200/50"
                    >
                      Change Section
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30">
                      {selectedSection.courseCode}
                    </Badge>
                    <span>•</span>
                    <span>{selectedSection.totalStudents} Students</span>
                  </div>
                </Card>

                {/* Attendance Stats */}
                <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-200" />
                  Today's Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400">Present</p>
                        <p className="text-white font-semibold text-lg">
                          {attendanceStats.present}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {attendanceStats.total > 0
                        ? Math.round(
                            (attendanceStats.present / attendanceStats.total) * 100
                          )
                        : 0}
                      %
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400">Absent</p>
                        <p className="text-white font-semibold text-lg">
                          {attendanceStats.absent}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      {attendanceStats.total > 0
                        ? Math.round(
                            (attendanceStats.absent / attendanceStats.total) * 100
                          )
                        : 0}
                      %
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-amber-200/10 border border-amber-200/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-200/20 flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-amber-200" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400">Pending</p>
                        <p className="text-white font-semibold text-lg">
                          {attendanceStats.pending}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* QR Code Actions */}
              <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-amber-200" />
                  QR Code Attendance
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Generate a QR code for students to scan and mark their attendance automatically.
                </p>
                {!showQR ? (
                  <Button
                    onClick={generateQRCode}
                    className="w-full h-11 bg-amber-200 hover:bg-amber-300 text-black font-semibold"
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    Generate QR Code
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 bg-black/10 rounded-lg flex items-center justify-center mb-2">
                          <QrCode className="w-32 h-32 text-neutral-800" />
                        </div>
                        <p className="text-xs text-neutral-600 font-mono">{qrCode}</p>
                      </div>
                    </div>
                    {isQrActive && (
                      <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-sm text-green-400 font-medium">Active</span>
                        </div>
                        <span className="text-white font-mono font-semibold">
                          {formatTime(qrTimer)}
                        </span>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        onClick={generateQRCode}
                        variant="outline"
                        className="h-9 text-xs border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-200/50"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Regenerate
                      </Button>
                      <Button
                        onClick={closeQRCode}
                        variant="outline"
                        className="h-9 text-xs border-neutral-800 text-neutral-400 hover:text-red-400 hover:border-red-500/50"
                      >
                        Close QR
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              {/* Quick Actions */}
              <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button
                    onClick={markAllPresent}
                    variant="outline"
                    className="w-full h-10 text-sm border-green-500/50 text-green-400 hover:bg-green-500/10"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Mark All Present
                  </Button>
                  <Button
                    onClick={markAllAbsent}
                    variant="outline"
                    className="w-full h-10 text-sm border-red-500/50 text-red-400 hover:bg-red-500/10"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Mark All Absent
                  </Button>
                  <Button
                    onClick={saveAttendance}
                    className="w-full h-10 text-sm bg-amber-200 hover:bg-amber-300 text-black font-semibold"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Attendance
                  </Button>
                </div>
              </Card>
                </div>
              </ScrollArea>
            </div>

            {/* Right Column - Students List */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
              <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
                {/* Search & Header */}
                <div className="px-6 py-5 border-b border-neutral-800/50 space-y-4 shrink-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-200" />
                      Students List ({filteredStudents.length})
                    </h3>
                    <Button
                      variant="outline"
                      className="h-9 text-xs border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-200/50"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Export
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <Input
                      placeholder="Search by name, roll number, or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-10 bg-black/40 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
                    />
                  </div>
                </div>

                {/* Students List */}
                <ScrollArea className="flex-1 min-h-0">
                  <div className="p-6 space-y-3">
                    {filteredStudents.map((student, idx) => (
                      <motion.div
                        key={student.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <Card
                          className={`p-4 transition-all ${
                            student.status === "present"
                              ? "bg-green-500/10 border-green-500/30"
                              : student.status === "absent"
                              ? "bg-red-500/10 border-red-500/30"
                              : "bg-black/40 border-neutral-800/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                                <span className="text-amber-200 font-semibold text-sm">
                                  {student.avatar}
                                </span>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="text-white font-semibold text-sm">
                                    {student.name}
                                  </h4>
                                  {student.markedBy && (
                                    <Badge
                                      className={`text-xs ${
                                        student.markedBy === "qr"
                                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                          : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                                      }`}
                                    >
                                      {student.markedBy === "qr" ? "QR Scan" : "Manual"}
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-neutral-500">
                                  <span>{student.rollNumber}</span>
                                  <span>•</span>
                                  <span>{student.email}</span>
                                  {student.markedAt && (
                                    <>
                                      <span>•</span>
                                      <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {student.markedAt}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                onClick={() => markAttendance(student.id, "present")}
                                className={`h-9 px-4 ${
                                  student.status === "present"
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : "bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50"
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                Present
                              </Button>
                              <Button
                                onClick={() => markAttendance(student.id, "absent")}
                                className={`h-9 px-4 ${
                                  student.status === "absent"
                                    ? "bg-red-500 hover:bg-red-600 text-white"
                                    : "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50"
                                }`}
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Absent
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersAttendance;