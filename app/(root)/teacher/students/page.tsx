"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
  User,
  Grid3x3,
  Clock,
  GraduationCap,
  Home,
  UserCircle,
} from "lucide-react";

interface Section {
  id: string;
  name: string;
  course: string;
  courseCode: string;
  totalStudents: number;
  schedule: string;
}

interface Student {
  id: string;
  rollNumber: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gpa: number;
  attendance: number;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  enrolledCourses: {
    code: string;
    name: string;
    grade: string;
  }[];
  recentGrades: {
    subject: string;
    grade: string;
    score: number;
  }[];
}

const TeachersStudents = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - Sections
  const sections: Section[] = [
    {
      id: "1",
      name: "Class 10-A",
      course: "Advanced Mathematics",
      courseCode: "MATH301",
      totalStudents: 45,
      schedule: "Mon, Wed, Fri - 09:00 AM",
    },
    {
      id: "2",
      name: "Class 10-B",
      course: "Advanced Mathematics",
      courseCode: "MATH301",
      totalStudents: 42,
      schedule: "Tue, Thu - 11:00 AM",
    },
    {
      id: "3",
      name: "Class 11-A",
      course: "Calculus & Analytics",
      courseCode: "MATH401",
      totalStudents: 38,
      schedule: "Mon, Wed - 02:00 PM",
    },
    {
      id: "4",
      name: "Class 11-B",
      course: "Calculus & Analytics",
      courseCode: "MATH401",
      totalStudents: 40,
      schedule: "Tue, Thu - 03:00 PM",
    },
  ];

  // Mock data - Students
  const students: Student[] = [
    {
      id: "1",
      rollNumber: "2024001",
      name: "Divit Periwal",
      avatar: "DP",
      email: "dp3300@srmist.srm.edu",
      phone: "+91 98765 43210",
      address: "123 Park Street, New Delhi, 110001",
      dob: "15 March 2009",
      gpa: 8.85,
      attendance: 94.5,
      parentName: "Mr. Deepesh Periwal",
      parentPhone: "+91 98765 43211",
      parentEmail: "deepesh.periwal@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "A" },
        { code: "PHY302", name: "Quantum Physics", grade: "A" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "A-" },
        { code: "ENG201", name: "English Literature", grade: "A" },
        { code: "CS401", name: "Data Structures", grade: "A+" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "A", score: 92 },
        { subject: "Physics", grade: "A", score: 91 },
        { subject: "Chemistry", grade: "A-", score: 88 },
      ],
    },
    {
      id: "2",
      rollNumber: "2024002",
      name: "Aarav Sharma",
      avatar: "AS",
      email: "aarav.sharma@student.srm.edu",
      phone: "+91 98765 43212",
      address: "456 MG Road, Mumbai, 400001",
      dob: "22 July 2009",
      gpa: 8.65,
      attendance: 92.3,
      parentName: "Mrs. Priya Sharma",
      parentPhone: "+91 98765 43213",
      parentEmail: "priya.sharma@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "A-" },
        { code: "PHY302", name: "Quantum Physics", grade: "B+" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "A" },
        { code: "ENG201", name: "English Literature", grade: "A-" },
        { code: "CS401", name: "Data Structures", grade: "A" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "A-", score: 88 },
        { subject: "Physics", grade: "B+", score: 85 },
        { subject: "Chemistry", grade: "A", score: 90 },
      ],
    },
    {
      id: "3",
      rollNumber: "2024003",
      name: "Priya Verma",
      avatar: "PV",
      email: "priya.verma@student.srm.edu",
      phone: "+91 98765 43214",
      address: "789 Brigade Road, Bangalore, 560001",
      dob: "10 September 2009",
      gpa: 9.12,
      attendance: 96.8,
      parentName: "Mr. Suresh Verma",
      parentPhone: "+91 98765 43215",
      parentEmail: "suresh.verma@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "A+" },
        { code: "PHY302", name: "Quantum Physics", grade: "A+" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "A" },
        { code: "ENG201", name: "English Literature", grade: "A+" },
        { code: "CS401", name: "Data Structures", grade: "A+" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "A+", score: 98 },
        { subject: "Physics", grade: "A+", score: 96 },
        { subject: "Chemistry", grade: "A", score: 94 },
      ],
    },
    {
      id: "4",
      rollNumber: "2024004",
      name: "Rohan Kumar",
      avatar: "RK",
      email: "rohan.kumar@student.srm.edu",
      phone: "+91 98765 43216",
      address: "321 Anna Salai, Chennai, 600002",
      dob: "5 January 2009",
      gpa: 8.42,
      attendance: 89.5,
      parentName: "Mrs. Lakshmi Kumar",
      parentPhone: "+91 98765 43217",
      parentEmail: "lakshmi.kumar@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "B+" },
        { code: "PHY302", name: "Quantum Physics", grade: "A-" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "B+" },
        { code: "ENG201", name: "English Literature", grade: "A" },
        { code: "CS401", name: "Data Structures", grade: "A-" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "B+", score: 82 },
        { subject: "Physics", grade: "A-", score: 87 },
        { subject: "Chemistry", grade: "B+", score: 84 },
      ],
    },
    {
      id: "5",
      rollNumber: "2024005",
      name: "Sneha Patel",
      avatar: "SP",
      email: "sneha.patel@student.srm.edu",
      phone: "+91 98765 43218",
      address: "654 Salt Lake, Kolkata, 700091",
      dob: "18 November 2009",
      gpa: 8.78,
      attendance: 93.2,
      parentName: "Mr. Amit Patel",
      parentPhone: "+91 98765 43219",
      parentEmail: "amit.patel@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "A" },
        { code: "PHY302", name: "Quantum Physics", grade: "A-" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "A" },
        { code: "ENG201", name: "English Literature", grade: "A-" },
        { code: "CS401", name: "Data Structures", grade: "A" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "A", score: 90 },
        { subject: "Physics", grade: "A-", score: 88 },
        { subject: "Chemistry", grade: "A", score: 91 },
      ],
    },
    {
      id: "6",
      rollNumber: "2024006",
      name: "Arjun Reddy",
      avatar: "AR",
      email: "arjun.reddy@student.srm.edu",
      phone: "+91 98765 43220",
      address: "987 Banjara Hills, Hyderabad, 500034",
      dob: "28 April 2009",
      gpa: 8.95,
      attendance: 95.1,
      parentName: "Dr. Kavita Reddy",
      parentPhone: "+91 98765 43221",
      parentEmail: "kavita.reddy@gmail.com",
      enrolledCourses: [
        { code: "MATH301", name: "Advanced Mathematics", grade: "A" },
        { code: "PHY302", name: "Quantum Physics", grade: "A+" },
        { code: "CHEM301", name: "Organic Chemistry", grade: "A" },
        { code: "ENG201", name: "English Literature", grade: "A" },
        { code: "CS401", name: "Data Structures", grade: "A+" },
      ],
      recentGrades: [
        { subject: "Mathematics", grade: "A", score: 93 },
        { subject: "Physics", grade: "A+", score: 97 },
        { subject: "Chemistry", grade: "A", score: 92 },
      ],
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.includes(searchQuery) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <Users className="inline-block w-6 h-6 mr-2 text-amber-200" />
              Students <span className="font-medium text-amber-200">Directory</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              View and manage student information
            </p>
          </div>
          {selectedSection && (
            <Button
              onClick={() => {
                setSelectedSection(null);
                setSelectedStudent(null);
              }}
              variant="outline"
              className="h-10 border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-200/50"
            >
              Back to Sections
            </Button>
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
                  Choose the class section to view students
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
          /* Students List View */
          <div className="flex-1 flex gap-6 p-6 overflow-hidden">
            {/* Left - Students List */}
            <div className="w-[420px] flex flex-col overflow-hidden min-h-0">
              <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
                {/* Header */}
                <div className="px-6 py-5 border-b border-neutral-800/50 space-y-4 shrink-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {selectedSection.name}
                      </h3>
                      <p className="text-neutral-500 text-sm">
                        {filteredStudents.length} students
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <Input
                      placeholder="Search students..."
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
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Card
                          onClick={() => setSelectedStudent(student)}
                          className={`p-4 cursor-pointer transition-all ${
                            selectedStudent?.id === student.id
                              ? "bg-amber-200/10 border-amber-200/50 shadow-lg shadow-amber-200/10"
                              : "bg-black/40 border-neutral-800/50 hover:border-amber-200/30"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                              <span className="text-amber-200 font-semibold text-sm">
                                {student.avatar}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-sm mb-1">
                                {student.name}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-neutral-500">
                                <span>{student.rollNumber}</span>
                                <span>•</span>
                                <Badge
                                  className={`text-xs ${
                                    student.gpa >= 9
                                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                                      : student.gpa >= 8
                                      ? "bg-amber-200/20 text-amber-200 border-amber-200/30"
                                      : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                  }`}
                                >
                                  GPA {student.gpa}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </div>

            {/* Right - Student Profile */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
              <AnimatePresence mode="wait">
                {selectedStudent ? (
                  <motion.div
                    key={selectedStudent.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col overflow-hidden min-h-0"
                  >
                    <Card className="flex-1 bg-neutral-950/50 border-neutral-800/50 flex flex-col overflow-hidden min-h-0">
                      {/* Profile Header */}
                      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                            <span className="text-amber-200 font-bold text-2xl">
                              {selectedStudent.avatar}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h2 className="text-white text-2xl font-semibold mb-1">
                              {selectedStudent.name}
                            </h2>
                            <p className="text-neutral-500 text-sm mb-3">
                              Roll No: {selectedStudent.rollNumber}
                            </p>
                            <div className="flex items-center gap-4">
                              <div>
                                <p className="text-xs text-neutral-500">GPA</p>
                                <p className="text-xl font-bold text-amber-200">
                                  {selectedStudent.gpa}
                                </p>
                              </div>
                              <div className="h-10 w-px bg-neutral-800" />
                              <div>
                                <p className="text-xs text-neutral-500">Attendance</p>
                                <p className="text-xl font-bold text-green-400">
                                  {selectedStudent.attendance}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Profile Details - Scrollable */}
                      <ScrollArea className="flex-1 min-h-0">
                        <div className="p-6 space-y-6">
                          {/* Contact Information */}
                          <Card className="p-5 bg-black/40 border-neutral-800/50">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <UserCircle className="w-5 h-5 text-amber-200" />
                              Contact Information
                            </h3>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Email</p>
                                  <p className="text-sm text-white">{selectedStudent.email}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Phone</p>
                                  <p className="text-sm text-white">{selectedStudent.phone}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Address</p>
                                  <p className="text-sm text-white">{selectedStudent.address}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Calendar className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Date of Birth</p>
                                  <p className="text-sm text-white">{selectedStudent.dob}</p>
                                </div>
                              </div>
                            </div>
                          </Card>

                          {/* Parent/Guardian Information */}
                          <Card className="p-5 bg-black/40 border-neutral-800/50">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <Home className="w-5 h-5 text-amber-200" />
                              Parent/Guardian Details
                            </h3>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <User className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Name</p>
                                  <p className="text-sm text-white">{selectedStudent.parentName}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Phone</p>
                                  <p className="text-sm text-white">{selectedStudent.parentPhone}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                                <div>
                                  <p className="text-xs text-neutral-500">Email</p>
                                  <p className="text-sm text-white">{selectedStudent.parentEmail}</p>
                                </div>
                              </div>
                            </div>
                          </Card>

                          {/* Enrolled Courses */}
                          <Card className="p-5 bg-black/40 border-neutral-800/50">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-amber-200" />
                              Enrolled Courses
                            </h3>
                            <div className="space-y-2">
                              {selectedStudent.enrolledCourses.map((course, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-lg"
                                >
                                  <div>
                                    <p className="text-sm text-white font-medium">
                                      {course.name}
                                    </p>
                                    <p className="text-xs text-neutral-500">{course.code}</p>
                                  </div>
                                  <Badge
                                    className={`${
                                      course.grade.includes("+")
                                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                                        : course.grade.includes("-")
                                        ? "bg-amber-200/20 text-amber-200 border-amber-200/30"
                                        : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    }`}
                                  >
                                    {course.grade}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </Card>

                          {/* Recent Grades */}
                          <Card className="p-5 bg-black/40 border-neutral-800/50">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-amber-200" />
                              Recent Performance
                            </h3>
                            <div className="space-y-3">
                              {selectedStudent.recentGrades.map((grade, idx) => (
                                <div key={idx}>
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-400">
                                      {grade.subject}
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-white font-semibold">
                                        {grade.score}%
                                      </span>
                                      <Badge
                                        className={`${
                                          grade.grade.includes("+")
                                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                                            : grade.grade.includes("-")
                                            ? "bg-amber-200/20 text-amber-200 border-amber-200/30"
                                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                        }`}
                                      >
                                        {grade.grade}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-amber-200 rounded-full transition-all"
                                      style={{ width: `${grade.score}%` }}
                                    />
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
                      <User className="w-20 h-20 text-neutral-700 mx-auto mb-6" />
                      <p className="text-neutral-400 text-lg mb-2 font-medium">
                        Select a student to view details
                      </p>
                      <p className="text-neutral-600 text-sm">
                        Choose from the list to see their profile information
                      </p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersStudents;