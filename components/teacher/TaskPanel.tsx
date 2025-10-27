import { Plus, Circle, CheckCircle2, MoreVertical, Clock } from "lucide-react";

import React, { useState } from "react";


interface Task {
  id: number;
  title: string;
  dueDate?: string;
  tag: "Your Task" | "System Task";
  completed?: boolean;
}


const TaskPanel: React.FC<{ tasks: Task[] }> = ({ tasks = [] }) => {
  const [filter, setFilter] = useState("today");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const filterOptions = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "week", label: "Week" },
    { value: "all", label: "All" },
  ];

  const toggleTask = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const activeTasks = taskList?.filter((t) => !t.completed) || [];
  const completedTasks = taskList?.filter((t) => t.completed) || [];

  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full max-h-[340px] min-h-[470px]">
      {/* Header */}
      <div className="p-3 border-b border-neutral-800 ">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-sm font-semibold text-amber-200">Tasks</h2>
            <p className="text-[9px] text-neutral-500 mt-0.5">
              {activeTasks.length} pending
            </p>
          </div>
          <button
            className="p-1 bg-amber-200 text-black rounded-md hover:bg-amber-300 transition-all"
            title="Add task"
          >
            <Plus size={12} strokeWidth={2.5} />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-1">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`flex-1 px-2 py-1 rounded text-[9px] font-medium transition-all ${
                filter === option.value
                  ? "bg-amber-200 text-black"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task List - Scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {activeTasks.length === 0 ? (
          <div className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 mb-2">
              <CheckCircle2 size={24} className="text-amber-200" />
            </div>
            <p className="text-[10px] text-neutral-400 font-medium">
              No pending tasks
            </p>
            <p className="text-[9px] text-neutral-600 mt-0.5">All caught up!</p>
          </div>
        ) : (
          <div className="p-2 space-y-1.5">
            {taskList.map((task) => (
              <div
                key={task.id}
                className={`group relative bg-black border rounded-md p-2 transition-all hover:border-amber-200/40 ${
                  task.completed
                    ? "border-neutral-800/50 opacity-50"
                    : "border-neutral-800"
                }`}
              >
                <div className="flex items-start gap-2">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {task.completed ? (
                      <CheckCircle2
                        size={12}
                        className="text-amber-200"
                        strokeWidth={2}
                      />
                    ) : (
                      <Circle
                        size={12}
                        className="text-neutral-600 group-hover:text-amber-200/60 transition-colors"
                        strokeWidth={2}
                      />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[10px] leading-relaxed mb-1 ${
                        task.completed
                          ? "line-through text-neutral-600"
                          : "text-neutral-200"
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        className={`inline-flex items-center px-1 py-0.5 rounded text-[8px] font-medium ${
                          task.tag === "Your Task"
                            ? "bg-amber-200/10 text-amber-200 border border-amber-200/20"
                            : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                        }`}
                      >
                        {task.tag === "Your Task" ? "Personal" : "System"}
                      </span>
                      {task.dueDate && (
                        <span className="text-[8px] text-neutral-600 font-medium flex items-center gap-0.5">
                          <Clock size={7} />
                          {task.dueDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* More Options */}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-neutral-800 rounded">
                    <MoreVertical size={10} className="text-neutral-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {taskList.length > 0 && (
        <div className="p-2 border-t border-neutral-800 bg-neutral-900/50 flex-shrink-0">
          <div className="flex items-center justify-between text-[8px] text-neutral-600 mb-1.5">
            <span>{taskList.length} total</span>
            <span className="text-amber-200 font-medium">
              {Math.round((completedTasks.length / taskList.length) * 100)}%
            </span>
          </div>
          {/* Progress Bar */}
          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-200 to-amber-300 transition-all duration-500 ease-out"
              style={{
                width: `${(completedTasks.length / taskList.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskPanel;
