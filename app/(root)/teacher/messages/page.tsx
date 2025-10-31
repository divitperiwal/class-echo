'use client'

import React, { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Send, 
  Megaphone, 
  Users, 
  Pin, 
  PinOff,
  Calendar,
  Clock,
  CheckCheck,
  Check,
  MoreVertical,
  Plus,
  Bell,
  Filter,
  Archive,
  Star,
  Paperclip,
  Image as ImageIcon,
  FileText,
  X
} from 'lucide-react'

interface Student {
  id: string
  name: string
  section: string
  avatar: string
  lastMessage?: string
  lastMessageTime?: string
  unread?: number
  online?: boolean
}

interface Message {
  id: string
  sender: 'teacher' | 'student'
  content: string
  time: string
  read: boolean
}

interface Announcement {
  id: string
  title: string
  content: string
  date: string
  time: string
  pinned: boolean
  sections: string[]
  priority: 'high' | 'medium' | 'low'
  views: number
}

const TeachersMessages = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [messageInput, setMessageInput] = useState('')
  const [activeTab, setActiveTab] = useState<'conversations' | 'announcements'>('conversations')
  const [showNewAnnouncement, setShowNewAnnouncement] = useState(false)
  const [filterSection, setFilterSection] = useState<string>('all')

  // Mock data
  const students: Student[] = [
    {
      id: '1',
      name: 'Rahul Sharma',
      section: 'Class 10-A',
      avatar: 'RS',
      lastMessage: 'Thank you for the feedback on my assignment',
      lastMessageTime: '10:30 AM',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Priya Singh',
      section: 'Class 10-A',
      avatar: 'PS',
      lastMessage: 'When is the next exam?',
      lastMessageTime: '9:15 AM',
      unread: 1,
      online: true
    },
    {
      id: '3',
      name: 'Amit Kumar',
      section: 'Class 10-B',
      avatar: 'AK',
      lastMessage: 'I have submitted the project',
      lastMessageTime: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: '4',
      name: 'Sneha Patel',
      section: 'Class 10-B',
      avatar: 'SP',
      lastMessage: 'Could you explain the last topic again?',
      lastMessageTime: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: '5',
      name: 'Vikram Reddy',
      section: 'Class 11-A',
      avatar: 'VR',
      lastMessage: 'Thank you!',
      lastMessageTime: '2 days ago',
      unread: 0,
      online: true
    },
    {
      id: '6',
      name: 'Ananya Das',
      section: 'Class 11-A',
      avatar: 'AD',
      lastMessage: 'I need help with homework',
      lastMessageTime: '2 days ago',
      unread: 3,
      online: false
    },
    {
      id: '7',
      name: 'Karan Mehta',
      section: 'Class 11-B',
      avatar: 'KM',
      lastMessage: 'Regarding the class schedule...',
      lastMessageTime: '3 days ago',
      unread: 0,
      online: false
    },
    {
      id: '8',
      name: 'Divya Joshi',
      section: 'Class 11-B',
      avatar: 'DJ',
      lastMessage: 'Can I meet you tomorrow?',
      lastMessageTime: '3 days ago',
      unread: 1,
      online: true
    }
  ]

  const conversations: { [key: string]: Message[] } = {
    '1': [
      { id: '1', sender: 'student', content: 'Good morning sir! I wanted to discuss my recent assignment.', time: '10:25 AM', read: true },
      { id: '2', sender: 'teacher', content: 'Good morning Rahul. Yes, I reviewed your work. You did quite well!', time: '10:27 AM', read: true },
      { id: '3', sender: 'student', content: 'Thank you for the feedback on my assignment', time: '10:30 AM', read: false },
    ],
    '2': [
      { id: '1', sender: 'student', content: 'Good morning sir!', time: '9:10 AM', read: true },
      { id: '2', sender: 'student', content: 'When is the next exam?', time: '9:15 AM', read: false },
    ],
  }

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Mid-Term Examination Schedule',
      content: 'The mid-term examinations will be conducted from November 15-20. Please prepare accordingly and check the detailed schedule on the portal.',
      date: 'Oct 30, 2025',
      time: '2:30 PM',
      pinned: true,
      sections: ['Class 10-A', 'Class 10-B'],
      priority: 'high',
      views: 156
    },
    {
      id: '2',
      title: 'Project Submission Deadline Extended',
      content: 'Due to popular request, the project submission deadline has been extended to November 10. Make sure to submit quality work.',
      date: 'Oct 29, 2025',
      time: '11:00 AM',
      pinned: true,
      sections: ['Class 11-A', 'Class 11-B'],
      priority: 'medium',
      views: 142
    },
    {
      id: '3',
      title: 'Extra Classes Schedule',
      content: 'Extra classes for Mathematics will be held every Saturday from 10 AM to 12 PM. Attendance is optional but highly recommended.',
      date: 'Oct 28, 2025',
      time: '4:15 PM',
      pinned: false,
      sections: ['Class 10-A', 'Class 10-B', 'Class 11-A'],
      priority: 'medium',
      views: 98
    },
    {
      id: '4',
      title: 'Study Material Available',
      content: 'New study materials for Chapter 5 and 6 have been uploaded to the portal. Please download and review before the next class.',
      date: 'Oct 27, 2025',
      time: '9:30 AM',
      pinned: false,
      sections: ['Class 10-A', 'Class 10-B'],
      priority: 'low',
      views: 134
    },
    {
      id: '5',
      title: 'Parent-Teacher Meeting',
      content: 'Parent-teacher meeting is scheduled for November 5. Please inform your parents. Individual time slots will be shared soon.',
      date: 'Oct 26, 2025',
      time: '1:45 PM',
      pinned: false,
      sections: ['Class 10-A', 'Class 10-B', 'Class 11-A', 'Class 11-B'],
      priority: 'high',
      views: 189
    }
  ]

  const sections = ['all', 'Class 10-A', 'Class 10-B', 'Class 11-A', 'Class 11-B']

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.section.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSection = filterSection === 'all' || student.section === filterSection
    return matchesSearch && matchesSection
  })

  const filteredAnnouncements = announcements.filter(announcement => {
    if (filterSection === 'all') return true
    return announcement.sections.includes(filterSection)
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20'
      case 'medium': return 'text-amber-400 bg-amber-500/20'
      case 'low': return 'text-green-400 bg-green-500/20'
      default: return 'text-neutral-400 bg-neutral-500/20'
    }
  }

  return (
    <div className="h-full bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-800/50 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              <Megaphone className="inline-block w-6 h-6 mr-2 text-amber-200" />
              Messages & <span className="font-medium text-amber-200">Announcements</span>
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              Communicate with students and manage class announcements
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowNewAnnouncement(!showNewAnnouncement)}
              className="bg-amber-500 hover:bg-amber-600 text-black text-sm h-10"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Announcement
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setActiveTab('conversations')}
            variant={activeTab === 'conversations' ? 'default' : 'ghost'}
            size="sm"
            className={activeTab === 'conversations' 
              ? 'bg-amber-200/20 text-amber-200 border border-amber-200/30 hover:bg-amber-200/30 h-9' 
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800 h-9'
            }
          >
            <Users className="w-4 h-4 mr-2" />
            Conversations
            {students.filter(s => s.unread && s.unread > 0).length > 0 && (
              <Badge className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0">
                {students.reduce((sum, s) => sum + (s.unread || 0), 0)}
              </Badge>
            )}
          </Button>
          <Button
            onClick={() => setActiveTab('announcements')}
            variant={activeTab === 'announcements' ? 'default' : 'ghost'}
            size="sm"
            className={activeTab === 'announcements' 
              ? 'bg-amber-200/20 text-amber-200 border border-amber-200/30 hover:bg-amber-200/30 h-9' 
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800 h-9'
            }
          >
            <Megaphone className="w-4 h-4 mr-2" />
            Announcements
            <Badge className="ml-2 bg-neutral-700 text-neutral-300 text-xs px-1.5 py-0">
              {announcements.length}
            </Badge>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 flex">
        <AnimatePresence mode="wait">
          {activeTab === 'conversations' ? (
            <motion.div
              key="conversations"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex-1 flex min-h-0"
            >
              {/* Students List */}
              <div className="w-[400px] shrink-0 border-r border-neutral-800/50 bg-neutral-950/30 flex flex-col min-h-0">
                {/* Search & Filter */}
                <div className="shrink-0 p-4 space-y-3 border-b border-neutral-800/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search students..."
                      className="pl-10 bg-neutral-900 border-neutral-800 text-xs h-9 text-neutral-300"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-neutral-500" />
                    <ScrollArea className="flex-1">
                      <div className="flex gap-2">
                        {sections.map((section) => (
                          <Button
                            key={section}
                            onClick={() => setFilterSection(section)}
                            variant="ghost"
                            size="sm"
                            className={`shrink-0 text-xs h-7 ${
                              filterSection === section
                                ? 'bg-amber-200/20 text-amber-200 border border-amber-200/30'
                                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                            }`}
                          >
                            {section === 'all' ? 'All Sections' : section}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>

                {/* Students List */}
                <ScrollArea className="flex-1 min-h-0">
                  <div className="p-2 space-y-1">
                    {filteredStudents.map((student, index) => (
                      <motion.div
                        key={student.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card
                          onClick={() => setSelectedStudent(student)}
                          className={`p-4 cursor-pointer transition-all border ${
                            selectedStudent?.id === student.id
                              ? 'bg-amber-200/10 border-amber-200/50'
                              : 'bg-neutral-950/50 border-neutral-800/50 hover:border-amber-200/30'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative">
                              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-semibold text-sm">
                                {student.avatar}
                              </div>
                              {student.online && (
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="font-medium text-white truncate text-sm">
                                  {student.name}
                                </h3>
                                {student.unread && student.unread > 0 && (
                                  <Badge className="bg-amber-200/20 text-amber-200 border-amber-200/30 text-xs px-1.5 py-0">
                                    {student.unread}
                                  </Badge>
                                )}
                              </div>
                              
                              <p className="text-xs text-neutral-500 mb-1.5">
                                {student.section}
                              </p>
                              
                              {student.lastMessage && (
                                <div className="flex items-center justify-between">
                                  <p className="text-xs text-neutral-400 truncate flex-1">
                                    {student.lastMessage}
                                  </p>
                                  <span className="text-xs text-neutral-500 ml-2 shrink-0">
                                    {student.lastMessageTime}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col min-h-0 bg-black">
                {selectedStudent ? (
                  <>
                    {/* Chat Header */}
                    <div className="shrink-0 p-4 border-b border-neutral-800/50 bg-neutral-950/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-semibold text-sm">
                              {selectedStudent.avatar}
                            </div>
                            {selectedStudent.online && (
                              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-white text-sm">
                              {selectedStudent.name}
                            </h3>
                            <p className="text-xs text-neutral-500">
                              {selectedStudent.section} • {selectedStudent.online ? 'Online' : 'Offline'}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-8 w-8 p-0">
                            <Archive className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-8 w-8 p-0">
                            <Star className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-8 w-8 p-0">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 min-h-0">
                      <div className="p-6 space-y-4">
                        {(conversations[selectedStudent.id] || []).map((message, index) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex ${message.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-[70%] ${message.sender === 'teacher' ? 'order-2' : 'order-1'}`}>
                              <div className={`p-3 rounded-lg ${
                                message.sender === 'teacher'
                                  ? 'bg-amber-500 text-black'
                                  : 'bg-neutral-900 border border-neutral-800/50 text-white'
                              }`}>
                                <p className="text-xs">{message.content}</p>
                              </div>
                              <div className={`flex items-center gap-2 mt-1 ${
                                message.sender === 'teacher' ? 'justify-end' : 'justify-start'
                              }`}>
                                <span className="text-xs text-neutral-500">{message.time}</span>
                                {message.sender === 'teacher' && (
                                  message.read ? (
                                    <CheckCheck className="w-3 h-3 text-blue-400" />
                                  ) : (
                                    <Check className="w-3 h-3 text-neutral-500" />
                                  )
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="shrink-0 p-4 border-t border-neutral-800/50 bg-neutral-950/30">
                      <div className="flex items-end gap-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-9 w-9 p-0">
                            <Paperclip className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-9 w-9 p-0">
                            <ImageIcon className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-9 w-9 p-0">
                            <FileText className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <Input
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder="Type a message..."
                          className="flex-1 bg-neutral-900 border-neutral-800 text-xs h-9 text-white"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && messageInput.trim()) {
                              setMessageInput('')
                            }
                          }}
                        />
                        
                        <Button
                          disabled={!messageInput.trim()}
                          className="bg-amber-500 hover:bg-amber-600 text-black h-9 w-9 p-0"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-neutral-500">
                    <div className="text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
                      <p className="text-sm text-neutral-400">Select a student to start messaging</p>
                      <p className="text-xs text-neutral-500 mt-1">Choose from the list on the left</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="announcements"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col min-h-0"
            >
              {/* New Announcement Form */}
              <AnimatePresence>
                {showNewAnnouncement && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-b border-neutral-800 bg-neutral-950/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-white">Create New Announcement</h3>
                        <Button
                          onClick={() => setShowNewAnnouncement(false)}
                          variant="ghost"
                          size="sm"
                          className="text-neutral-400 hover:text-white h-8 w-8 p-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-neutral-400 mb-2 block">Title</label>
                          <Input
                            placeholder="Enter announcement title..."
                            className="bg-neutral-900 border-neutral-800 text-xs h-9 text-white"
                          />
                        </div>
                        
                        <div>
                          <label className="text-xs text-neutral-400 mb-2 block">Content</label>
                          <textarea
                            placeholder="Enter announcement content..."
                            rows={4}
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-neutral-400 mb-2 block">Priority</label>
                            <select className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white h-9">
                              <option>High</option>
                              <option>Medium</option>
                              <option>Low</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="text-xs text-neutral-400 mb-2 block">Sections</label>
                            <select className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white h-9">
                              <option>All Sections</option>
                              <option>Class 10-A</option>
                              <option>Class 10-B</option>
                              <option>Class 11-A</option>
                              <option>Class 11-B</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Button className="bg-amber-500 hover:bg-amber-600 text-black text-xs h-9">
                            <Bell className="w-4 h-4 mr-2" />
                            Post Announcement
                          </Button>
                          <Button variant="outline" className="border-neutral-700 text-neutral-300 text-xs h-9 hover:text-white hover:border-neutral-600">
                            Save as Draft
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Filter Bar */}
              <div className="shrink-0 p-4 border-b border-neutral-800/50 bg-neutral-950/30">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-neutral-500" />
                  <div className="flex gap-2 flex-wrap">
                    {sections.map((section) => (
                      <Button
                        key={section}
                        onClick={() => setFilterSection(section)}
                        variant="ghost"
                        size="sm"
                        className={`text-xs h-7 ${
                          filterSection === section
                            ? 'bg-amber-200/20 text-amber-200 border border-amber-200/30'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                        }`}
                      >
                        {section === 'all' ? 'All Sections' : section}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Announcements List */}
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-6 space-y-4">
                  {filteredAnnouncements.map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`p-6 bg-neutral-950/50 border transition-all ${
                        announcement.pinned
                          ? 'border-amber-200/50'
                          : 'border-neutral-800/50 hover:border-amber-200/30'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {announcement.pinned && (
                                <Pin className="w-4 h-4 text-amber-200" />
                              )}
                              <h3 className="text-sm font-semibold text-white">
                                {announcement.title}
                              </h3>
                              <Badge className={getPriorityColor(announcement.priority)}>
                                {announcement.priority}
                              </Badge>
                            </div>
                            
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {announcement.content}
                            </p>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white h-8 w-8 p-0">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {announcement.sections.map((section) => (
                            <Badge
                              key={section}
                              className="bg-neutral-800 text-neutral-300 text-xs px-2 py-0"
                            >
                              {section}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
                          <div className="flex items-center gap-4 text-xs text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {announcement.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {announcement.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {announcement.views} views
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-amber-200 hover:text-amber-300 text-xs h-7"
                            >
                              {announcement.pinned ? (
                                <>
                                  <PinOff className="w-3 h-3 mr-1" />
                                  Unpin
                                </>
                              ) : (
                                <>
                                  <Pin className="w-3 h-3 mr-1" />
                                  Pin
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TeachersMessages