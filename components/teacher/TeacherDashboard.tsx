import React, { useState } from "react";
import TaskPanel from "./TaskPanel";
import Timetable from "./Timetable";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Task {
  id: number;
  title: string;
  dueDate?: string;
  tag: "Your Task" | "System Task";
  completed?: boolean;
}

interface Slot {
  time: string;
  subject: string | null;
  batch?: string;
  room?: string;
}

export default function TeacherDashboard() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Grade assignment submissions",
      dueDate: "Oct 28",
      tag: "Your Task",
      completed: false,
    },
    {
      id: 2,
      title: "Submit attendance report",
      dueDate: "Oct 29",
      tag: "System Task",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare quiz for Day 3",
      dueDate: "Oct 30",
      tag: "Your Task",
      completed: false,
    },
    {
      id: 4,
      title: "Review new guidelines",
      dueDate: "Oct 31",
      tag: "System Task",
      completed: true,
    },
    {
      id: 5,
      title: "Schedule parent meeting",
      dueDate: "Nov 2",
      tag: "System Task",
      completed: false,
    },
    {
      id: 6,
      title: "Upload course materials",
      dueDate: "Nov 3",
      tag: "Your Task",
      completed: false,
    },
    {
      id: 7,
      title: "Check student feedback",
      dueDate: "Nov 4",
      tag: "System Task",
      completed: false,
    },
    {
      id: 8,
      title: "Update grades for Day 2",
      dueDate: "Nov 5",
      tag: "Your Task",
      completed: false,
    },
  ];

  const timetableData = [
    // Day 1
    [
      { time: "08:00 - 09:00", subject: null },
      { time: "09:00 - 10:00", subject: "Math", batch: "A", room: "101" },
      { time: "10:00 - 11:00", subject: null },
      { time: "11:00 - 12:00", subject: "Physics", batch: "B", room: "102" },
      { time: "12:00 - 13:00", subject: null },
      { time: "13:00 - 14:00", subject: null },
      { time: "14:00 - 15:00", subject: "CSE", batch: "C", room: "103" },
      { time: "15:00 - 16:00", subject: null },
      { time: "16:00 - 17:00", subject: null },
    ],
    // Day 2
    [
      { time: "08:00 - 09:00", subject: "English", batch: "A", room: "104" },
      { time: "09:00 - 10:00", subject: null },
      { time: "10:00 - 11:00", subject: "Math", batch: "B", room: "101" },
      { time: "11:00 - 12:00", subject: null },
      { time: "12:00 - 13:00", subject: "Chemistry", batch: "C", room: "105" },
      { time: "13:00 - 14:00", subject: null },
      { time: "14:00 - 15:00", subject: null },
      { time: "15:00 - 16:00", subject: "Physics", batch: "A", room: "102" },
      { time: "16:00 - 17:00", subject: null },
    ],
    // Day 3
    [
      { time: "08:00 - 09:00", subject: null },
      { time: "09:00 - 10:00", subject: "Biology", batch: "B", room: "106" },
      { time: "10:00 - 11:00", subject: null },
      { time: "11:00 - 12:00", subject: "Math", batch: "C", room: "101" },
      { time: "12:00 - 13:00", subject: null },
      { time: "13:00 - 14:00", subject: "English", batch: "A", room: "104" },
      { time: "14:00 - 15:00", subject: null },
      { time: "15:00 - 16:00", subject: null },
      { time: "16:00 - 17:00", subject: "Chemistry", batch: "B", room: "105" },
    ],
    // Day 4
    [
      { time: "08:00 - 09:00", subject: "Physics", batch: "C", room: "102" },
      { time: "09:00 - 10:00", subject: null },
      { time: "10:00 - 11:00", subject: "Math", batch: "A", room: "101" },
      { time: "11:00 - 12:00", subject: null },
      { time: "12:00 - 13:00", subject: null },
      { time: "13:00 - 14:00", subject: "Biology", batch: "B", room: "106" },
      { time: "14:00 - 15:00", subject: null },
      { time: "15:00 - 16:00", subject: "English", batch: "C", room: "104" },
      { time: "16:00 - 17:00", subject: null },
    ],
    // Day 5
    [
      { time: "08:00 - 09:00", subject: null },
      { time: "09:00 - 10:00", subject: "Chemistry", batch: "A", room: "105" },
      { time: "10:00 - 11:00", subject: null },
      { time: "11:00 - 12:00", subject: "Physics", batch: "B", room: "102" },
      { time: "12:00 - 13:00", subject: null },
      { time: "13:00 - 14:00", subject: "Math", batch: "C", room: "101" },
      { time: "14:00 - 15:00", subject: null },
      { time: "15:00 - 16:00", subject: null },
      { time: "16:00 - 17:00", subject: "English", batch: "A", room: "104" },
    ],
  ];

  const dayNames = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];
  const [day, setDay] = useState(0);

  const handlePrevDay = () => setDay((prev) => (prev === 0 ? 4 : prev - 1));
  const handleNextDay = () => setDay((prev) => (prev === 4 ? 0 : prev + 1));

  return (
    <div className="h-full py-6 px-6 bg-black/50 ">
      <div className="mx-auto flex flex-col gap-4">
        <Timetable slots={timetableData[day]} />

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevDay}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-amber-200 hover:border-amber-200/50 transition-all"
            aria-label="Previous Day"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg">
            <Calendar size={14} className="text-amber-200" />
            <span className="text-sm font-semibold text-amber-200">
              {dayNames[day]}
            </span>
          </div>
          <button
            onClick={handleNextDay}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-amber-200 hover:border-amber-200/50 transition-all"
            aria-label="Next Day"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-end w-full">
          <div className="w-110">
            <TaskPanel tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}
