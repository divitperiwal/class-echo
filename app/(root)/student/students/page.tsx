"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gpa: number;
  attendance: number;
  class: string;
  section: string;
  bloodGroup: string;
  parentName: string;
  parentPhone: string;
  courses: string[];
  recentGrades: { subject: string; grade: string; score: number }[];
}

const StudentsStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Mock data - students in the same class
  const students: Student[] = [
    {
      id: "1",
      name: "Aarav Sharma",
      rollNo: "2024001",
      email: "aarav.sharma@school.edu",
      phone: "+91 98765 43210",
      address: "123 MG Road, Mumbai, Maharashtra",
      dob: "March 15, 2007",
      gpa: 3.85,
      attendance: 94.5,
      class: "10",
      section: "A",
      bloodGroup: "O+",
      parentName: "Rajesh Sharma",
      parentPhone: "+91 98765 00001",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
      recentGrades: [
        { subject: "Mathematics", grade: "A", score: 92 },
        { subject: "Physics", grade: "A-", score: 88 },
        { subject: "Chemistry", grade: "A", score: 90 },
      ],
    },
    {
      id: "2",
      name: "Ananya Patel",
      rollNo: "2024002",
      email: "ananya.patel@school.edu",
      phone: "+91 98765 43211",
      address: "456 Park Street, Mumbai, Maharashtra",
      dob: "July 22, 2007",
      gpa: 3.92,
      attendance: 96.8,
      class: "10",
      section: "A",
      bloodGroup: "A+",
      parentName: "Vikram Patel",
      parentPhone: "+91 98765 00002",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      recentGrades: [
        { subject: "Mathematics", grade: "A+", score: 96 },
        { subject: "Physics", grade: "A", score: 93 },
        { subject: "Biology", grade: "A+", score: 97 },
      ],
    },
    {
      id: "3",
      name: "Divit Periwal",
      rollNo: "2024003",
      email: "divit.periwal@school.edu",
      phone: "+91 98765 43212",
      address: "789 Marine Drive, Mumbai, Maharashtra",
      dob: "January 10, 2007",
      gpa: 3.78,
      attendance: 92.3,
      class: "10",
      section: "A",
      bloodGroup: "B+",
      parentName: "Suresh Periwal",
      parentPhone: "+91 98765 00003",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
      recentGrades: [
        { subject: "Mathematics", grade: "A-", score: 88 },
        { subject: "Physics", grade: "B+", score: 85 },
        { subject: "Computer Science", grade: "A", score: 91 },
      ],
    },
    {
      id: "4",
      name: "Ishaan Kumar",
      rollNo: "2024004",
      email: "ishaan.kumar@school.edu",
      phone: "+91 98765 43213",
      address: "321 Linking Road, Mumbai, Maharashtra",
      dob: "September 5, 2007",
      gpa: 3.65,
      attendance: 89.7,
      class: "10",
      section: "A",
      bloodGroup: "AB+",
      parentName: "Amit Kumar",
      parentPhone: "+91 98765 00004",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Economics"],
      recentGrades: [
        { subject: "Mathematics", grade: "B+", score: 83 },
        { subject: "Economics", grade: "A", score: 89 },
        { subject: "English", grade: "A-", score: 86 },
      ],
    },
    {
      id: "5",
      name: "Kavya Reddy",
      rollNo: "2024005",
      email: "kavya.reddy@school.edu",
      phone: "+91 98765 43214",
      address: "654 Worli, Mumbai, Maharashtra",
      dob: "December 18, 2007",
      gpa: 3.88,
      attendance: 95.2,
      class: "10",
      section: "A",
      bloodGroup: "O-",
      parentName: "Srinivas Reddy",
      parentPhone: "+91 98765 00005",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      recentGrades: [
        { subject: "Chemistry", grade: "A+", score: 94 },
        { subject: "Biology", grade: "A", score: 91 },
        { subject: "Mathematics", grade: "A", score: 89 },
      ],
    },
    {
      id: "6",
      name: "Rohan Mehta",
      rollNo: "2024006",
      email: "rohan.mehta@school.edu",
      phone: "+91 98765 43215",
      address: "987 Bandra West, Mumbai, Maharashtra",
      dob: "April 30, 2007",
      gpa: 3.72,
      attendance: 91.5,
      class: "10",
      section: "A",
      bloodGroup: "A-",
      parentName: "Karan Mehta",
      parentPhone: "+91 98765 00006",
      courses: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
      recentGrades: [
        { subject: "Physics", grade: "A-", score: 87 },
        { subject: "Computer Science", grade: "A", score: 90 },
        { subject: "Mathematics", grade: "B+", score: 84 },
      ],
    },
  ];

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <Users className="inline-block w-6 h-6 mr-2 text-amber-200" />
              Class <span className="font-medium text-amber-200">Students</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-0.5">Class 10-A • {students.length} Students</p>
          </div>
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <Input
              placeholder="Search by name, roll no, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9 text-sm bg-neutral-950/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-200/50 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - Students List */}
        <div className="w-96 border-r border-neutral-800/50 overflow-y-auto">
          <div className="p-4 space-y-2">
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
                      ? "bg-amber-200/10 border-amber-200/50"
                      : "bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                      <span className="text-amber-200 font-semibold text-sm">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{student.name}</p>
                      <p className="text-neutral-500 text-xs">Roll No: {student.rollNo}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="outline"
                        className="text-xs bg-amber-200/10 text-amber-200 border-amber-200/30"
                      >
                        {student.gpa.toFixed(2)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Student Profile */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedStudent ? (
              <motion.div
                key={selectedStudent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6"
              >
                {/* Profile Header */}
                <Card className="p-6 bg-neutral-950/50 border-neutral-800/50 mb-4">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-amber-200/20 flex items-center justify-center shrink-0">
                      <span className="text-amber-200 font-bold text-3xl">
                        {selectedStudent.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-white mb-1">
                        {selectedStudent.name}
                      </h2>
                      <p className="text-neutral-400 text-sm mb-3">
                        Roll No: {selectedStudent.rollNo} • Class {selectedStudent.class}-
                        {selectedStudent.section}
                      </p>
                      <div className="flex gap-3">
                        <Badge className="bg-amber-200/10 text-amber-200 border-amber-200/30">
                          GPA: {selectedStudent.gpa.toFixed(2)}
                        </Badge>
                        <Badge className="bg-amber-200/10 text-amber-200 border-amber-200/30">
                          Attendance: {selectedStudent.attendance}%
                        </Badge>
                        <Badge className="bg-amber-200/10 text-amber-200 border-amber-200/30">
                          Blood: {selectedStudent.bloodGroup}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Contact Information */}
                <Card className="p-5 bg-neutral-950/50 border-neutral-800/50 mb-4">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-200" />
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

                <div className="grid grid-cols-2 gap-4">
                  {/* Parent Information */}
                  <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-200" />
                      Parent Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-neutral-500">Parent Name</p>
                        <p className="text-sm text-white">{selectedStudent.parentName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Parent Phone</p>
                        <p className="text-sm text-white">{selectedStudent.parentPhone}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Courses */}
                  <Card className="p-5 bg-neutral-950/50 border-neutral-800/50">
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-200" />
                      Enrolled Courses
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudent.courses.map((course, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-neutral-900/50 text-neutral-300 border-neutral-700"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Recent Grades */}
                <Card className="p-5 bg-neutral-950/50 border-neutral-800/50 mt-4">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-200" />
                    Recent Grades
                  </h3>
                  <div className="space-y-2">
                    {selectedStudent.recentGrades.map((grade, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-neutral-800/50"
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
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <Users className="w-16 h-16 text-neutral-700 mx-auto mb-4" />
                  <p className="text-neutral-500 text-lg">Select a student to view profile</p>
                  <p className="text-neutral-600 text-sm mt-2">
                    Click on any student from the list
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StudentsStudents; 